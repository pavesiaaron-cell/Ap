"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function CsvImportButton({ onImport }: { onImport?: () => void }) {
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/leads/import", { method: "POST", body: formData });
      const data = await res.json();
      if (res.ok) {
        toast.success(`Imported ${data.imported} leads`);
        onImport?.();
        window.location.reload();
      } else {
        toast.error(data.error || "Import failed");
      }
    } catch {
      toast.error("Upload failed");
    } finally {
      setIsUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <>
      <input ref={inputRef} type="file" accept=".csv" className="hidden" onChange={handleFile} />
      <Button variant="outline" size="sm" onClick={() => inputRef.current?.click()} disabled={isUploading}>
        <Upload className="w-4 h-4 mr-2" />
        {isUploading ? "Importing..." : "Import CSV"}
      </Button>
    </>
  );
}
