'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useState } from 'react';

export default function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // The resume should be in the public folder
      const resumeUrl = '/Maheen kehkasha-r.pdf'; // Reference the file directly from the public folder

      // Fetch the file
      const response = await fetch(resumeUrl);

      if (!response.ok) {
        throw new Error('Failed to download the resume');
      }

      // Ensure it's a PDF
      if (response.headers.get('Content-Type') !== 'application/pdf') {
        throw new Error('The file is not a PDF');
      }

      // Get the blob from the response
      const blob = await response.blob();

      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Maheen_Kehkasha_Resume.pdf';

      // Append to the body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Release the temporary URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Failed to download the resume. Please try again later.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Button onClick={handleDownload} className="mt-4" disabled={isDownloading}>
      <Download className="mr-2 h-4 w-4" />
      {isDownloading ? 'Downloading...' : 'Download Resume'}
    </Button>
  );
}
