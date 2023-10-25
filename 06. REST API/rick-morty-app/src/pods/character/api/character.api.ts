import { Character } from './character.api-model';
//import { Lookup } from 'common/models';
// import { mockCities } from './character.mock-data';
import Axios from 'axios';

const characterListUrl = '/api/characters'

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await Axios.get(`${characterListUrl}/${id}`);
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await Axios.put<Character>(`${characterListUrl}/${character.id}`, character);
  } else {
    await Axios.post(characterListUrl, character);
  }
  return true;
};
