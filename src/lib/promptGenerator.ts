interface Selections {
  theme: string;
  background: string;
  character: string;
  style: string;
  colorScheme: string;
  accessories: string;
  expression: string;
  pose: string;
}

export const generatePrompt = (selections: Selections): string => {
  const {
    theme,
    background,
    character,
    style,
    colorScheme,
    accessories,
    expression,
    pose,
  } = selections;

  if (!character) return "Start selecting options to generate your prompt...";

  const parts = [
    expression && `${expression}`,
    character,
    accessories && `with ${accessories}`,
    pose && `${pose}`,
    background && `through ${background}`,
    style && `in ${style} style`,
    colorScheme && `with ${colorScheme} colors`,
  ].filter(Boolean);

  return parts.join(" ") + ".";
};