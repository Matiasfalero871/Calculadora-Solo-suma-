const handleClick =()=>{

    let numero =  parseInt(prompt("Ingrese un numero"));
   let numero2 = parseInt (prompt ("Ingrese otro numero crack"));
   
   console.log(numero + numero2);

   let resultado = numero + numero2;

   document.getElementById("texto").textContent = resultado;    

}

    
