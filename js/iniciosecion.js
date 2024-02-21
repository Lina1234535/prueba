var input = document.getElementById('validationDefault01');
input.oninvalid = function(event){
    
    event.target.setCustomValidity("debe de llevar un @ y un dominio para ser valido")
}
  var input2 = document.getElementById('validationDefault02');
  input2.oninvalid=function(event){

    event.target.setCustomValidity('minimo 8 caracteres y maximo 20');
  }