export const getRandomOption = <T>(options: T[]): T => {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

export const getRandomSelections = (options: Record<string, string[]>) => {
  const selections: Record<string, string> = {};
  
  Object.entries(options).forEach(([category, categoryOptions]) => {
    selections[category] = getRandomOption(categoryOptions);
  });
  
  return selections;
};