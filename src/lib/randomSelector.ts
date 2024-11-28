export const getRandomOption = <T>(options: T[]): T => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

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

export const getRandomSelections = (options: Record<string, string[]>): Selections => {
  return {
    theme: getRandomOption(options.theme),
    background: getRandomOption(options.background),
    character: getRandomOption(options.character),
    style: getRandomOption(options.style),
    colorScheme: getRandomOption(options.colorScheme),
    accessories: getRandomOption(options.accessories),
    expression: getRandomOption(options.expression),
    pose: getRandomOption(options.pose),
  };
};