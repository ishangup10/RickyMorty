export const fetchCharacters = (data) => {
    return { type: 'FETCH_CHARACTERS', payload: data }
};

export const getCharacter = (data) => {
    console.log('action',data)
    return { type: 'GET_CHARACTER', payload: data }
}
  
  