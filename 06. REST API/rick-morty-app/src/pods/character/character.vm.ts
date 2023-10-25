export interface Character {
  id: string;
  name: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
});
