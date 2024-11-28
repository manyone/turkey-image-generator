import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Copy, RefreshCw } from "lucide-react";
import OptionSelector from "@/components/OptionSelector";
import { generatePrompt } from "@/lib/promptGenerator";

const Index = () => {
  const [selections, setSelections] = useState({
    theme: "",
    background: "",
    character: "",
    style: "",
    colorScheme: "",
    accessories: "",
    expression: "",
    pose: "",
  });

  const handleSelect = (category: string, value: string) => {
    console.log(`Selected ${value} for ${category}`);
    setSelections((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleReset = () => {
    console.log("Resetting selections");
    setSelections({
      theme: "",
      background: "",
      character: "",
      style: "",
      colorScheme: "",
      accessories: "",
      expression: "",
      pose: "",
    });
    toast({
      title: "Reset complete",
      description: "All selections have been cleared.",
    });
  };

  const handleCopyPrompt = () => {
    const prompt = generatePrompt(selections);
    navigator.clipboard.writeText(prompt);
    console.log("Copied prompt:", prompt);
    toast({
      title: "Prompt copied!",
      description: "The generated prompt has been copied to your clipboard.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Turkey Generator</h1>
          <p className="text-muted-foreground">
            Create unique turkey prompts for image generation
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <OptionSelector
              category="theme"
              options={[
                "Thanksgiving",
                "Space Adventure",
                "Underwater Exploration",
                "Fantasy Kingdom",
                "Cyberpunk Future",
              ]}
              selected={selections.theme}
              onSelect={(value) => handleSelect("theme", value)}
            />
            
            <OptionSelector
              category="background"
              options={[
                "Autumn Forest",
                "Starry Sky",
                "Ocean Depths",
                "Medieval Castle",
                "Neon Cityscape",
              ]}
              selected={selections.background}
              onSelect={(value) => handleSelect("background", value)}
            />

            <OptionSelector
              category="character"
              options={[
                "Traditional Turkey",
                "Robo-Turkey",
                "Mer-Turkey",
                "Dragon-Turkey",
                "Cyber-Turkey",
              ]}
              selected={selections.character}
              onSelect={(value) => handleSelect("character", value)}
            />

            <OptionSelector
              category="style"
              options={[
                "Cartoon",
                "Realistic",
                "Surreal",
                "Pixel Art",
                "Watercolor",
              ]}
              selected={selections.style}
              onSelect={(value) => handleSelect("style", value)}
            />
          </div>

          <div className="space-y-6">
            <OptionSelector
              category="colorScheme"
              options={[
                "Autumnal",
                "Neon",
                "Pastel",
                "Monochrome",
                "Rainbow",
              ]}
              selected={selections.colorScheme}
              onSelect={(value) => handleSelect("colorScheme", value)}
            />

            <OptionSelector
              category="accessories"
              options={[
                "Pilgrim Hat",
                "Astronaut Helmet",
                "Mermaid Tail",
                "Wizard Hat",
                "Cybernetic Enhancements",
              ]}
              selected={selections.accessories}
              onSelect={(value) => handleSelect("accessories", value)}
            />

            <OptionSelector
              category="expression"
              options={[
                "Happy",
                "Surprised",
                "Angry",
                "Sleepy",
                "Confused",
              ]}
              selected={selections.expression}
              onSelect={(value) => handleSelect("expression", value)}
            />

            <OptionSelector
              category="pose"
              options={[
                "Strutting",
                "Flying",
                "Sitting",
                "Dancing",
                "Fighting",
              ]}
              selected={selections.pose}
              onSelect={(value) => handleSelect("pose", value)}
            />
          </div>
        </div>

        <Card className="p-6 mt-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Generated Prompt</h2>
            <p className="text-muted-foreground min-h-[4rem] p-4 bg-muted rounded-md">
              {generatePrompt(selections)}
            </p>
            <div className="flex gap-4">
              <Button
                onClick={handleCopyPrompt}
                className="flex items-center gap-2"
              >
                <Copy className="w-4 h-4" />
                Copy Prompt
              </Button>
              <Button
                variant="outline"
                onClick={handleReset}
                className="flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Reset
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;