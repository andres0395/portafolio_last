import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contact';
import { EmailService } from '@/lib/services/EmailService';
import xss from 'xss';


const rateLimit = new Map<string, { count: number; lastReset: number }>();
const WINDOW_SIZE = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

export async function POST(request: Request) {
  try {

    const origin = request.headers.get('origin');

    const allowedOrigin = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    if (origin && !origin.includes(allowedOrigin) && !origin.includes('localhost')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const userLimit = rateLimit.get(ip);

    if (userLimit) {
      if (now - userLimit.lastReset > WINDOW_SIZE) {

        rateLimit.set(ip, { count: 1, lastReset: now });
      } else {
        if (userLimit.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { error: 'Has excedido el límite de mensajes. Intenta más tarde.' },
            { status: 429 }
          );
        }
        userLimit.count++;
      }
    } else {
      rateLimit.set(ip, { count: 1, lastReset: now });
    }

    if (rateLimit.size > 1000) {
      rateLimit.clear();
    }

    const body = await request.json();

    // 3. Honeypot Validation
    if (body.company) {
      return NextResponse.json(
        { message: 'Mensaje enviado correctamente' },
        { status: 200 }
      );
    }

    const { turnstileToken } = body;
    if (!turnstileToken) {
      return NextResponse.json({ error: 'Verificación de seguridad requerida' }, { status: 400 });
    }

    const formData = new FormData();
    formData.append('secret', process.env.TURNSTILE_SECRET_KEY || '');
    formData.append('response', turnstileToken);
    formData.append('remoteip', ip);

    const turnstileResult = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      body: formData,
      method: 'POST',
    });

    const turnstileOutcome = await turnstileResult.json();
    if (!turnstileOutcome.success) {
      return NextResponse.json({ error: 'Verificación de seguridad fallida' }, { status: 400 });
    }


    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Datos inválidos', details: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    const sanitizedMessage = xss(message);
    const sanitizedSubject = xss(subject);
    const sanitizedName = xss(name);
    if (email.includes('\r') || email.includes('\n')) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
    }

    const emailService = EmailService.getInstance();

    const isConnected = await emailService.verifyConnection();
    if (!isConnected) {
      console.error("Failed to connect to email server");
      return NextResponse.json(
        { error: 'Error de conexión con el servicio de correo' },
        { status: 500 }
      );
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #2563EB;">Nuevo Mensaje de Contacto</h2>
        <p><strong>De:</strong> ${sanitizedName} (${email})</p>
        <p><strong>Asunto:</strong> ${sanitizedSubject}</p>
        <hr style="border: 1px solid #eee; margin: 20px 0;" />
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px;">
          <p style="white-space: pre-wrap;">${sanitizedMessage}</p>
        </div>
      </div>
    `;

    await emailService.sendEmail({
      to: process.env.EMAIL_USER || '',
      subject: `[Portfolio Contact] ${sanitizedSubject}`,
      html: htmlContent,
      replyTo: email,
    });

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
