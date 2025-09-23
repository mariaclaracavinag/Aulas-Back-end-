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