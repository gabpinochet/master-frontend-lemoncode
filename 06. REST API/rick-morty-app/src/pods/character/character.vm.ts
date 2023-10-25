export interface Character {
  id: string;
  name: string;
  bestSentence: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  bestSentence: '',
});
