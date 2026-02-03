'use client';

import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVDocument from '../pdf/CVDocument';
import { Button } from '../atoms/Button';

export const CVDownloadButton = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Button variant="outline" size="lg" fullWidth disabled>
        Cargando CV...
      </Button>
    );
  }

  return (
    <PDFDownloadLink
      document={<CVDocument />}
      fileName="CV_Andres_Munoz.pdf"
      className="w-full sm:w-auto"
    >
      {({ loading }) => (
        <Button
          variant="outline"
          size="lg"
          fullWidth
          disabled={loading}
        >
          {loading ? 'Generando PDF...' : 'Descargar CV'}
        </Button>
      )}
    </PDFDownloadLink>
  );
};
