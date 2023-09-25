
/**
 * Permite tomar una carta
 * @param {Array<string>} deck es un arreglo de string
 * @returns {string} retorna una carta y la elimina del deck
 */

export const pedirCarta = ( deck ) => {
      
    if ( !deck || deck.length === 0){
        throw new Error('No quedan mas cartas');
    }
    
    const carta = deck.pop()

    return carta;
}