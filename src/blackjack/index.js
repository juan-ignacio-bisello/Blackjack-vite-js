import _ from 'underscore';
// import crearDeck, { miNombre } from './usecases/crear-deck';
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck';
import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCartaHTML } from './useCases/index';


/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
 let deck         = [];
 const tipos      = ['C','D','H','S'];
 const especiales = ['A','J','Q','K'];
 
 let puntosJugador = 0,
     puntosComputadora = 0;
 
 // Referencias del HTML
 const btnPedir   = document.querySelector('#btnPedir');
 const btnDetener = document.querySelector('#btnDetener');
 const btnNuevo   = document.querySelector('#btnNuevo');
 
 const divCartasJugador     = document.querySelector('#jugador-cartas');
 const divCartasComputadora = document.querySelector('#computadora-cartas');
 
 const puntosHTML = document.querySelectorAll('small');
 
  
 deck = crearDeck(tipos, especiales);


 // Eventos
 btnPedir.addEventListener('click', () => {
 
     const carta = pedirCarta( deck );
     
     puntosJugador = puntosJugador + valorCarta( carta );
     puntosHTML[0].innerText = puntosJugador;
     
     // <img class="carta" src="assets/cartas/2C.png">
     const imgCarta = crearCartaHTML( carta );
     divCartasJugador.append( imgCarta );
 
     if ( puntosJugador > 21 ) {
         console.warn('Lo siento mucho, perdiste');
         btnPedir.disabled   = true;
         btnDetener.disabled = true;
         turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
 
     } else if ( puntosJugador === 21 ) {
         console.warn('21, genial!');
         btnPedir.disabled   = true;
         btnDetener.disabled = true;
         turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
     }
 
 });
 
 
 btnDetener.addEventListener('click', () => {
     btnPedir.disabled   = true;
     btnDetener.disabled = true;
 
     turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
 });
 
 btnNuevo.addEventListener('click', () => {
 
     console.clear();
     deck = [];
     deck = crearDeck( tipos, especiales );
 
     puntosJugador     = 0;
     puntosComputadora = 0;
     
     puntosHTML[0].innerText = 0;
     puntosHTML[1].innerText = 0;
 
     divCartasComputadora.innerHTML = '';
     divCartasJugador.innerHTML = '';
 
     btnPedir.disabled   = false;
     btnDetener.disabled = false;
 
 });
 

// import _ from 'underscore';

// import { crearDeck, pedirCarta, valorCarta } from './useCases/index'

// const miModulo = (() => {
//   'use strict'

//   let deck = [];
//   const tipos = ['C','D','H','S'];
//   const especiales = ['A','J','Q','K'];

//   let puntosJugadores = [];
  
//   //referencias HTML
//   const puntosHTML = document.querySelectorAll('small'),
//   divCartasJugadores = document.querySelectorAll('.divCartas');
  
//   const btnNuevo = document.querySelector('#btnNuevo'),
//         btnPedir = document.querySelector('#btnPedir'),
//         btnDetener = document.querySelector('#btnDetener');
  

//   deck = crearDeck( tipos, especiales );
  
//   const inicializarJuego = (numJugadores = 2 ) => {
//     let deck =  [];
//     deck = crearDeck( tipos, especiales );
//     puntosJugadores = [];
//     for ( let i = 0; i < numJugadores ; i++ ){
//         puntosJugadores.push(0);
//     }

//     puntosHTML.forEach( elem => elem.innerText = 0 );
//     divCartasJugadores.forEach( elem => elem.innerHTML = '');
// }

//   inicializarJuego();

//   const valorCarta = ( carta ) => {
//     const valor = carta.substring( 0, carta.length - 1);

//     return ((  isNaN( valor ) ) ? 
//         ( valor === 'A' ) ? 11 : 10 
//         : valor * 1);
// }

  
//   // Turno: 0 = primer jugador y ultimop computadora
//   const acumularPuntos = ( carta, turno ) => {
//       puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
//       puntosHTML[turno].innerText = puntosJugadores[turno];

//       return puntosJugadores[turno];
//   }
  
//   const crearCarta = ( carta, turno ) => {
//       const imgCarta = document.createElement('img');
//       imgCarta.src = `assets/cartas/${ carta }.png`;
//       imgCarta.classList.add('carta');
//       divCartasJugadores[turno].append( imgCarta );
//   }

//   const determinarGanador = () => {

//       const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

//       setTimeout(() => {
//           if( puntosComputadora === puntosMinimos ) {
//               alert('Nadie gana');
//           } else if ( puntosMinimos > 21 ) {
//               alert('Computadora gana')
//           } else if( puntosComputadora > 21 ) {
//               alert('Jugador Gana');
//           }else if ( puntosMinimos === 21 ){
//               alert('Jugador gana, BLACKJACK');
//           }
//            else {
//               alert('Computadora Gana')
//           }
//       }, 300 );

//   }
  
//   // turno computadora
//   const turnoComputadora = ( puntosMinimos ) => {

//       let puntosComputadora = 0;

//       do {
//           const carta = pedirCarta( deck );
//           puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
//           crearCarta( carta, puntosJugadores.length - 1 );
          
//       } while( puntosComputadora < puntosMinimos && puntosMinimos < 21 );
  
//       determinarGanador();
//   }
  
//   const valor = valorCarta(pedirCarta( deck ));
  
//   //eventos
//   btnNuevo.addEventListener('click', () => {

//       inicializarJuego();

//       btnPedir.disabled   = false;
//       btnDetener.disabled = false;

//   })
  
//   btnPedir.addEventListener('click', () => {
//       const carta = pedirCarta( deck );
//       const puntosJugador = acumularPuntos( carta, 0 );
      
//       crearCarta( carta, 0 );
  
//       if ( puntosJugador > 21 ) {
//           console.warn('Lo siento mucho, perdiste');
//           btnPedir.disabled   = true;
//           btnDetener.disabled = true;
//           turnoComputadora( puntosJugador );

//       } else if ( puntosJugador === 21 ) {
//           console.warn('21, genial!');
//           btnPedir.disabled   = true;
//           btnDetener.disabled = true;
//           turnoComputadora( puntosJugador );
//       }
  
  
//   });
  
//   btnDetener.addEventListener('click', () => {
      
//       btnPedir.disabled   = true;
//       btnDetener.disabled = true;

//       turnoComputadora( puntosJugadores[0] );
  
//   });

//   return{
//       nuevoJuego: inicializarJuego
//   };
// })();