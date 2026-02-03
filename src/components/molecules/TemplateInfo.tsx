
import { Container } from "../atoms/Container";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import { FC, ReactNode } from "react";
import { SectionHeader } from "./SectionHeader";

interface TemplateInfoProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}


export const TemplateInfo: FC<TemplateInfoProps> = ({
  title,
  subtitle,
  children,
  className = 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'
}) => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-20">
        <div className={className}>
          <SectionHeader
            title={title}
            subtitle={subtitle}
          />

          {/* Content */}
          <Container className='bg-white rounded-xl shadow-lg p-8 space-y-8'>
            {children}
          </Container>

        </div>
      </div>
      <Footer />
    </>
  );
}