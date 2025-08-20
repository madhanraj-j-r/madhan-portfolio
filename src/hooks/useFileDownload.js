import { useState } from "react";

export const useFileDownload = () => {
  const [status, setStatus] = useState("idle"); // idle | downloading | success

  const handleDownload = (fileUrl, fileName) => {
    setStatus("downloading");

    // Simulate loading effect
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName || "downloaded-file";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setStatus("success");

      // Reset after 1.2s
      setTimeout(() => {
        setStatus("idle");
      }, 1200);
    }, 1500);
  };

  return { status, handleDownload };
};
