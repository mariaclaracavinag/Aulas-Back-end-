let diaSemana = 'terça'; 

switch (diaSemana) {
    case 'segunda' :  // if (diasemana == 'segunda')
        console.log('hoje tem senai');
        break;
    case 'terça' :  // if (diasemana == 'terça')
        console.log('hoje tem senai');
        break;
    case 'quarta' :  // if (diasemana == 'quarta')
    case 'quinta' :  // if (diasemana == 'quinta')
    case 'sexta' :  // if (diasemana == 'seta')
        console.log('hoje tem aula do sesi');
        break;
    default :     // else 
        console.log('hoje não tem aula'); 
    break; 
}