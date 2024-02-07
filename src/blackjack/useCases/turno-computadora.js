import { pedirCarta, valorCarta, crearCartaHTML } from './';

/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error('Puntos mínimos son necesarios');
    if ( !puntosHTML ) throw new Error('Argumento puntosHTML es necesario');

    let puntosComputadora = 0;
 
    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}



// import { pedirCarta } from './pedir-carta';
// import { determinarGanador } from './determinar-ganador'

// /**
//  * turno de la computadora
//  * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
//  * @param {Array<string>} deck 
//  */

// export const turnoComputadora = ( puntosMinimos, deck=[] ) => {

//     let puntosComputadora = 0;
//     if (!puntosMinimos ) throw new Error('Puntos minimos son necesarios');
    

//     do {
//         const carta = pedirCarta( deck );
//         puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
//         crearCarta( carta, puntosJugadores.length - 1 );
        
//     } while( puntosComputadora < puntosMinimos && puntosMinimos < 21 );

//     determinarGanador( puntosMinimos, puntosComputadora );
// }