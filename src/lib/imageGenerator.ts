import { Client } from "@gradio/client";

export const generateImage = async (prompt: string): Promise<string> => {
  console.log("Generating image for prompt:", prompt);
  try {
    const client = await Client.connect("unofficial-hf-plugins/dalle2-image-generation");
    const result = await client.predict("/predict", {
      prompt,
      model: "dalle2",
    });
    console.log("Generated image result:", result.data);
    return result.data as string;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
}