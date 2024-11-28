import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { RefreshCw } from "lucide-react";
import { generateImage } from "@/lib/imageGenerator";

interface PromptDisplayProps {
  prompt: string;
  onReset: () => void;
}

const PromptDisplay = ({ prompt, onReset }: PromptDisplayProps) => {
  const handleGenerateImage = async () => {
    try {
      console.log("Starting image generation");
      const imageUrl = await generateImage(prompt);
      toast({
        title: "Image generated!",
        description: "Your turkey image has been generated successfully.",
      });
      // You can handle the imageUrl here, e.g., display it in the UI
    } catch (error) {
      console.error("Failed to generate image:", error);
      toast({
        title: "Error",
        description: "Failed to generate image. Please try again.",
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
      </div>
    </Card>
  );
};

export default PromptDisplay;