import _ from 'underscore';

// export const miNombre = 'Fernando';


/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0  ) 
        throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    
    if ( !tiposEspeciales || tiposEspeciales.length === 0  ) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}



// export default crearDeck;


// import _ from 'underscore'

// /**
//  * Esta funcion crea un nuevo deck
//  * @param {Array<string>} tiposDeCartas 
//  * @param {Array<string>} tiposEspeciales
//  * @returns {Array} retorna el deck
//  */

// export const crearDeck = ( tiposDeCartas, tiposEspeciales ) => {


//     if ( !tiposDeCartas || tiposDeCartas.length === 0 ){
//         throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
//     }
//     if ( !tiposEspeciales || tiposEspeciales.length === 0 ){
//         throw new Error('tiposEspeciales es obligatorio como un arreglo de string');
//     }


//     let deck = [];

//     for ( let i = 2; i <= 10; i++){
//         for ( let tipo of tiposDeCartas ){
//             deck.push( i + tipo);
//         }
//     }
//     for ( let tipo of tiposDeCartas) {
//         for ( let esp of tiposEspeciales) {
//             deck.push( esp + tipo);
//         }
//     }

//     deck = _.shuffle( deck );
    
//     return deck;
// }