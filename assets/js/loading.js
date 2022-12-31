function loading(i){
        console.log("teste"+i);
    }

// loading();



function timeoutFunction()
{
  console.log("Iniciando Teste");


  for(i = 0; i < 100; i++) {

    setTimeout(function (i) {
      loading(i);
    }, 10);
  }


}
timeoutFunction();