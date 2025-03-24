import { rickAndMortyApi } from '../../../api/rickAndMortyApi';
import { setMainCharacters, startLoadingCharacters } from './rickandmortySlice';


export const getCharacters = ( characterId = '' ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingCharacters() );

        const { data } = await rickAndMortyApi.get(`/character/${ characterId }`);

        dispatch( setMainCharacters({ characters: data, characterId: characterId }) );
    }
}