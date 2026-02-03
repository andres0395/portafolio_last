"use client";

import { useContact } from "@/hooks/components/organisms/useContact";
import { Typography } from "@/components/atoms/Typography";
import { Card } from "@/components/atoms/Card";
import { FormGroup } from "@/components/molecules/FormGroup";
import { Input, TextArea } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";
import { SocialMedia } from "@/components/molecules/SocialMedia";
import { Turnstile } from '@marsidev/react-turnstile';

export default function ContactForm() {
  const {
    email,
    phone,
    location,
    formData,
    handleChange,
    handleSubmit,
    handleClick,
    loading,
  } = useContact();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Info */}
      <div className="space-y-8">
        <Typography variant="h3" className="mb-6">Información de Contacto</Typography>
        <Typography variant="body" className="text-gray-600 mb-8 leading-relaxed">
          Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades
          de colaboración. No dudes en contactarme.
        </Typography>

        <div className="space-y-6">
          <Card className="flex items-start" padding="md">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div onClick={() => handleClick(`mailto:${email}`)} className="cursor-pointer">
              <Typography variant="h4" className="text-lg font-semibold text-gray-900">Email</Typography>
              <Typography variant="body" className="text-gray-600">{email}</Typography>
            </div>
          </Card>

          <Card className="flex items-start" padding="md">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div onClick={() => handleClick(`tel:${phone}`)} className="cursor-pointer">
              <Typography variant="h4" className="text-lg font-semibold text-gray-900">Teléfono</Typography>
              <Typography variant="body" className="text-gray-600"> {phone}</Typography>
            </div>
          </Card>

          <Card className="flex items-start" padding="md">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div onClick={() => handleClick('', true)} className="cursor-pointer">
              <Typography variant="h4" className="text-lg font-semibold text-gray-900">Ubicación</Typography>
              <Typography variant="body" className="text-gray-600">{location}</Typography>
            </div>
          </Card>
        </div>

        <div className="pt-8">
          <Typography variant="h4" className="text-lg font-semibold text-gray-900 mb-4">Sígueme en redes</Typography>
          <SocialMedia type="contact" />
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <Typography variant="h3" className="mb-6">Envíame un mensaje</Typography>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field - hidden from users but visible to bots */}
          <div className="hidden opacity-0 absolute -z-10">
            <input
              type="text"
              id="company" // plausible name for bots
              name="company"
              tabIndex={-1}
              autoComplete="off"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              value={(formData as any).company || ''}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormGroup label="Nombre" htmlFor="name" required>
              <Input
                type="text"
                id="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                disabled={loading}
              />
            </FormGroup>
            <FormGroup label="Email" htmlFor="email" required>
              <Input
                type="email"
                id="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
              />
            </FormGroup>
          </div>

          <FormGroup label="Asunto" htmlFor="subject" required>
            <Input
              type="text"
              id="subject"
              placeholder="Asunto del mensaje"
              value={formData.subject}
              onChange={handleChange}
              disabled={loading}
            />
          </FormGroup>

          <FormGroup label="Mensaje" htmlFor="message" required>
            <TextArea
              id="message"
              rows={4}
              placeholder="Escribe tu mensaje aquí..."
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
            />
          </FormGroup>

          <div className="flex justify-center">
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
              onSuccess={(token) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                handleChange({ target: { id: 'turnstileToken', value: token } } as any);
              }}
            />
          </div>

          <Button type="submit" variant="primary" fullWidth size="lg" disabled={loading}>
            {loading ? 'Enviando...' : 'Enviar Mensaje'}
          </Button>
        </form>
      </div>
    </div>
  );
}