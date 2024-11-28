import { useState } from "react";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import OptionSelector from "@/components/OptionSelector";
import { generatePrompt } from "@/lib/promptGenerator";
import PromptDisplay from "@/components/PromptDisplay";

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

        <PromptDisplay 
          prompt={generatePrompt(selections)}
          onReset={handleReset}
        />
      </div>
    </div>
  );
};

export default Index;