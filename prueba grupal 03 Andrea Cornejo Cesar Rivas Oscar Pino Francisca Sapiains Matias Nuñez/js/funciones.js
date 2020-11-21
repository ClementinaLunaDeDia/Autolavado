$(document).ready(function() {
    $('.formulario').on('submit', function(e) {

        if (!validarSelect() || !validarSelect2()) {

            alert("seleccione otro item");

            e.preventDefault();
            
        }




        /*

        var opcion=document.getElementById("tipoLavado").value;
        console.log(opcion);
        if(opcion==="0"|| opcion===" " || opcion===empty)
        {
          document.getElementById("precio").innerHTML=0*1.19;
          alert("debe seleccionar lavado");
        }
        */


        var texto = $("form").serialize();
        alert(texto);

    }); 
});

let limite8 = (object) => {

    
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
    
    }


    

    function validarSelect()
{

    if($("#selects option:selected").val()=="0" || $("#selects option:selected").text()=="" )
    return false;
    else
    return true;

}

function validarSelect2()
{

    if($("#tipoLavado option:selected").val()=="0" || $("#selects option:selected").text()=="" )
    return false;
    else
    return true;

}

function todas()
{
    validarSelect();
    calcularPrecio();
    validarSelect2();
}


function calcularPrecio()
{
  var opcion=document.getElementById("tipoLavado").value;
  console.log(opcion);
  if(opcion==="0")
  {
    document.getElementById("precio").innerHTML=0*1.19;
    alert("debe ingresar un tipo de lavado")
  }
  if(opcion==="1")
  {
    console.log(5000*1.19);
    document.getElementById("precio").innerHTML=5000*1.19;
    
  }
  if(opcion==="2")
  {
    document.getElementById("precio").innerHTML=8000*1.19;
  }
  if(opcion==="3")
  {
    document.getElementById("precio").innerHTML=10000*1.19;
  }

  
}



function ValidaLongitud(campo, longitudMaxima) {
    try {
        if (campo.value.length > (longitudMaxima - 1))
            return false;
        else
            return true;             
    } catch (e) {
        return false;
    }
}


