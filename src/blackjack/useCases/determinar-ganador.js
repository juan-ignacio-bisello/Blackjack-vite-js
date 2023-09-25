

/**
 * 
 */

// export const determinarGanador = ( puntosMinimos, puntosComputadora ) => {

//     const acumularPuntos = ( carta, turno ) => {
//         puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
//         puntosHTML[turno].innerText = puntosJugadores[turno];
  
//         return puntosJugadores[turno];
//     }

//     const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

//     setTimeout(() => {
//         if( puntosComputadora === puntosMinimos ) {
//             alert('Nadie gana');
//         } else if ( puntosMinimos > 21 ) {
//             alert('Computadora gana')
//         } else if( puntosComputadora > 21 ) {
//             alert('Jugador Gana');
//         }else if ( puntosMinimos === 21 ){
//             alert('Jugador gana, BLACKJACK');
//         }
//          else {
//             alert('Computadora Gana')
//         }
//     }, 1000 );

// }