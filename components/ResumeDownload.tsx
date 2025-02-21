'use client';

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useState } from 'react';

export default function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    try {
      // Ensure the file is inside the 'public' folder
      const resumeUrl = '/Maheen-Kehkasha-updated.pdf';
      // No need for full path

      // Create a temporary <a> element to trigger the download
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'Maheen_Kehkasha_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Failed to download the resume. Please try again.');
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
