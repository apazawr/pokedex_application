export function typeColor(type = '') {
    switch (type) {
        case 'normal':
            return {
                background: 'linear-gradient(129deg, rgba(164,194,196,1) 21%, rgba(231,172,172,1) 44%, rgba(237,212,185,1) 56%)',
            };
        case 'bug':
            return {
                background: 'linear-gradient(129deg, rgba(101,21,21,1) 21%, rgba(228,213,213,1) 51%, rgba(130,72,7,1) 83%)'
            };
        case 'grass':
            return {
                background: 'linear-gradient(129deg, rgba(86,241,92,1) 6%, rgba(29,186,12,1) 45%, rgba(0,219,207,1) 100%)',
                color: 'rgb(2, 89, 12)',
            };
        case 'poison':
            return {
                background: 'linear-gradient(129deg, rgba(87,86,241,1) 6%, rgba(29,186,12,1) 44%, rgba(219,0,203,1) 100%)',
            };
        case 'fire':
            return {
                background: 'linear-gradient(129deg, rgba(255,23,0,1) 6%, rgba(255,241,0,1) 48%, rgba(255,255,255,1) 100%)',
            };
        case 'flying':
            return {
                background: 'radial-gradient(circle, rgba(0,255,246,1) 0%, rgba(255,255,255,1) 59%)',
            };
        case 'dragon':
            return {
                background: 'linear-gradient(129deg, rgba(23,0,255,1) 13%, rgba(255,0,0,1) 50%, rgba(0,0,0,1) 87%)',
                color: 'white',
            };
        case 'water':
            return {
                background: 'linear-gradient(129deg, rgba(255,255,255,1) 0%, rgba(98,250,255,1) 50%, rgba(149,182,255,1) 100%)',
            };
        case 'dark':
            return {
                background: 'linear-gradient(129deg, rgba(162,0,245,1) 0%, rgba(1,39,138,1) 22%, rgba(0,0,0,1) 53%)',
                color: 'grey'
            };
        case 'electric':
            return {
                background: 'linear-gradient(129deg, rgba(255,246,0,1) 0%, rgba(253,255,206,1) 50%, rgba(102,255,244,1) 100%)',
                color: 'rgb(238, 177, 44)',
            };
        case 'ground':
            return {
                background: 'linear-gradient(129deg, rgba(135,59,59,1) 0%, rgba(142,94,0,1) 50%, rgba(77,36,7,1) 100%)'
            };
        case 'ice':
            return {
                background: 'linear-gradient(135deg, rgba(67,151,255,0.4724483543417367) 0%, rgba(255,255,255,0.8534007352941176) 51%, rgba(91,255,252,0.6881346288515406) 100%)',
                color: 'rgb(41, 41, 253)'
            };
        case 'steel':
            return {
                background: 'linear-gradient(143deg, rgba(132,141,142,1) 0%, rgba(255,255,255,1) 24%, rgba(141,145,145,1) 91%)',
                color: 'rgb(100, 100, 100)'
            };
        case 'psychic':
            return {
                background: 'linear-gradient(135deg, rgba(198,68,255,1) 0%, rgba(102,132,255,1) 58%, rgba(110,2,255,1) 91%)',
                color: 'darkgrey'
            };
        case 'fairy':
            return {
                background: 'linear-gradient(135deg, rgba(0,255,31,1) 10%, rgba(255,102,245,1) 50%, rgba(255,2,154,1) 90%)',
                color: 'rgb(255, 255, 128)'
            };
        case 'fighting':
            return {
                background: 'linear-gradient(135deg, rgba(250,0,7,1) 0%, rgba(165,2,255,1) 100%)'
            };
        case 'rock':
            return {
                background: 'linear-gradient(135deg, rgba(133,133,133,1) 0%, rgba(188,194,196,1) 50%, rgba(97,121,114,1) 100%)',
                color: 'rgb(83, 67, 24)'
            };
        case 'ghost':
            return {
                background: 'linear-gradient(135deg, rgba(133,133,133,0.2) 0%, rgba(188,194,196,0.4) 50%, rgba(97,121,114,0.2) 100%)'
            };
        default:
            return {};
  }
}