import { useRouter } from "next/navigation";
import { useState } from "react";
import { email, phone, location } from "@/utils/consts/infoContact";


export const useContact = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
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
  };
};