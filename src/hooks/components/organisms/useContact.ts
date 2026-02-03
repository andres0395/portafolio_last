import { useRouter } from "next/navigation";
import { useState } from "react";
import { email, phone, location } from "@/utils/consts/infoContact";
import { toast } from "react-hot-toast";
import { contactSchema } from "@/lib/validations/contact";

export const useContact = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    turnstileToken: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const validation = contactSchema.safeParse(formData);
      if (!validation.success) {
        toast.error(validation.error.issues[0].message);
        setLoading(false);
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar el mensaje');
      }

      toast.success('¡Mensaje enviado con éxito!');
      setFormData({ name: '', email: '', subject: '', message: '', company: '', turnstileToken: '' });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Ocurrió un error inesperado');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleClick = (path: string, map?: boolean) => {
    if (map) {
      handleMapClick();
    } else {
      router.push(path);
    }
  };

  const handleMapClick = () => {
    window.open(
      'https://www.google.com/maps/place/Medell%C3%ADn,+Antioquia/@6.2768629,-75.6026421,13z/data=!4m15!1m8!3m7!1s0x8e4428dfb80fad05:0x42137cfcc7b53b56!2sMedell%C3%ADn,+Antioquia!3b1!8m2!3d6.2476376!4d-75.5658153!16zL20vMDF4XzZz!3m5!1s0x8e4428dfb80fad05:0x42137cfcc7b53b56!8m2!3d6.2476376!4d-75.5658153!16zL20vMDF4XzZz?entry=ttu&g_ep=EgoyMDI2MDEyOC4wIKXMDSoASAFQAw%3D%3D',
      "_blank",
      "noopener,noreferrer"
    );
  };

  return {
    email,
    phone,
    location,
    formData,
    handleChange,
    handleSubmit,
    handleClick,
    loading,
  };
};