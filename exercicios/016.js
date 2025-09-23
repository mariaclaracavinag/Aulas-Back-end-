//nomeada 
function valor_pi (){
  let pi = 3.1415
  return pi; 
}

function areaCircunferencia (raio){
    let pi = valor_pi ();
    let area = pi * (2*raio)
    console.log(`a area da circunferencia de raio ${raio} é ${area}`)
}
areaCircunferencia (20);
//anonima 
const valor_pi = function (){
  let pi = 3.1415
  return pi; 
}

const areaCircunferencia = function (raio){
    let pi = valor_pi ();
    let area = pi * (2*raio)
    console.log(`a area da circunferencia de raio ${raio} é ${area}`)
}
areaCircunferencia (20);
//arrow 
const valor_pi = () =>{
  let pi = 3.1415
  return pi; 
}

const areaCircunferencia = (raio) => {
    let pi = valor_pi ();
    let area = pi * (2*raio)
    console.log(`a area da circunferencia de raio ${raio} é ${area}`)
}
areaCircunferencia (20);
