import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Download, RefreshCw } from "lucide-react";
import { generateImage } from "@/lib/imageGenerator";
import { useState } from "react";

interface PromptDisplayProps {
  prompt: string;
  onReset: () => void;
}

const PromptDisplay = ({ prompt, onReset }: PromptDisplayProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    try {
      console.log("Starting image generation");
      const url = await generateImage(prompt);
      setImageUrl(url);
      console.log("Image URL set:", url);
      toast({
        title: "Image generated!",
        description: "Your turkey image has been generated successfully.",
      });
    } catch (error) {
      console.error("Failed to generate image:", error);
      toast({
        title: "Error",
        description: "Failed to generate image. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDownload = async () => {
    if (!imageUrl) return;
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'turkey-image.png';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast({
        title: "Download started",
        description: "Your image is being downloaded.",
      });
    } catch (error) {
      console.error("Failed to download image:", error);
      toast({
        title: "Error",
        description: "Failed to download image. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="p-6 mt-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Generated Prompt</h2>
        <p className="text-muted-foreground min-h-[4rem] p-4 bg-muted rounded-md">
          {prompt}
        </p>
        <div className="flex gap-4">
          <Button
            onClick={handleGenerateImage}
            className="flex items-center gap-2"
          >
            Generate Image
          </Button>
          <Button
            variant="outline"
            onClick={onReset}
            className="flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Reset
          </Button>
        </div>
        
        {imageUrl && (
          <div className="space-y-4">
            <img 
              src={imageUrl} 
              alt="Generated turkey" 
              className="w-full max-w-xl mx-auto rounded-lg shadow-lg"
            />
            <Button
              onClick={handleDownload}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Image
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default PromptDisplay;