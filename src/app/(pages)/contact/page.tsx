import ContactForm from "@/components/molecules/ContactForm";
import { TemplateInfo } from "@/components/molecules/TemplateInfo";


export default function ContactPage() {
  return (
    <TemplateInfo
      title="Contacto"
      subtitle="Ponte en contacto conmigo para tus proyectos"
      className=""
    >
      <ContactForm />
    </TemplateInfo>
  );
}