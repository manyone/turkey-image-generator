import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Sparkles } from "lucide-react";
import OptionSelector from "@/components/OptionSelector";
import { generatePrompt } from "@/lib/promptGenerator";
import PromptDisplay from "@/components/PromptDisplay";
import { getRandomSelections } from "@/lib/randomSelector";

const OPTIONS = {
  theme: ["Thanksgiving", "Space Adventure", "Underwater Exploration", "Fantasy Kingdom", "Cyberpunk Future"],
  background: ["Autumn Forest", "Starry Sky", "Ocean Depths", "Medieval Castle", "Neon Cityscape"],
  character: ["Traditional Turkey", "Robo-Turkey", "Mer-Turkey", "Dragon-Turkey", "Cyber-Turkey"],
  style: ["Cartoon", "Realistic", "Surreal", "Pixel Art", "Watercolor"],
  colorScheme: ["Autumnal", "Neon", "Pastel", "Monochrome", "Rainbow"],
  accessories: ["Pilgrim Hat", "Astronaut Helmet", "Mermaid Tail", "Wizard Hat", "Cybernetic Enhancements"],
  expression: ["Happy", "Surprised", "Angry", "Sleepy", "Confused"],
  pose: ["Strutting", "Flying", "Sitting", "Dancing", "Fighting"],
};

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

  const handleSurpriseMe = () => {
    console.log("Generating random selections");
    const randomSelections = getRandomSelections(OPTIONS);
    setSelections(randomSelections);
    toast({
      title: "Surprise!",
      description: "Random options have been selected for you.",
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
          <Button 
            onClick={handleSurpriseMe}
            className="flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Surprise Me!
          </Button>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <OptionSelector
              category="theme"
              options={OPTIONS.theme}
              selected={selections.theme}
              onSelect={(value) => handleSelect("theme", value)}
            />
            
            <OptionSelector
              category="background"
              options={OPTIONS.background}
              selected={selections.background}
              onSelect={(value) => handleSelect("background", value)}
            />

            <OptionSelector
              category="character"
              options={OPTIONS.character}
              selected={selections.character}
              onSelect={(value) => handleSelect("character", value)}
            />

            <OptionSelector
              category="style"
              options={OPTIONS.style}
              selected={selections.style}
              onSelect={(value) => handleSelect("style", value)}
            />
          </div>

          <div className="space-y-6">
            <OptionSelector
              category="colorScheme"
              options={OPTIONS.colorScheme}
              selected={selections.colorScheme}
              onSelect={(value) => handleSelect("colorScheme", value)}
            />

            <OptionSelector
              category="accessories"
              options={OPTIONS.accessories}
              selected={selections.accessories}
              onSelect={(value) => handleSelect("accessories", value)}
            />

            <OptionSelector
              category="expression"
              options={OPTIONS.expression}
              selected={selections.expression}
              onSelect={(value) => handleSelect("expression", value)}
            />

            <OptionSelector
              category="pose"
              options={OPTIONS.pose}
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