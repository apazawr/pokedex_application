export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1);
    }
    return result;
}
  
export const getRandomId = (allPokemonsId) => {
  const randomId = Math.floor(Math.random() * allPokemonsId.length);
  return allPokemonsId[randomId];
}