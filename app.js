//BOCETO PERIODO DE VENTA
var monthNames = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];

function periodos() {
    var today = new Date();
    var date1 = prompt("Ingrese desde cuando va el periodo de venta:", today.getDate()+"-"+monthNames[today.getMonth()]+"-"+today.getFullYear());
    var date2 = prompt("Hasta cuando?", today.getDate()+"-"+monthNames[today.getMonth()]+"-"+today.getFullYear());

    if (date1 != null) {
        x = "El periodo de venta va desde el " + date1 + " hasta el " + date2;
        document.getElementById("periodo").innerHTML = x;
    }
}
let diseños = [];
const addDesign = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let diseño = {  
        designName: document.getElementById("textBox1").value, 
        currentStock: document.getElementById("textBox2").value,
        productionAmmount: document.getElementById("textBox3").value, 
        priceEa: document.getElementById("textBox4").value, 
        ammountSold: document.getElementById("textBox5").value
    
    }
    diseños.push(diseño);
    document.forms[0].reset(); // to clear the form for the next entries

    //for display purposes only
    console.warn('added' , {diseños} );
    let pre = document.querySelector('#display pre');
    pre.textContent = '\n' + JSON.stringify(diseños, '\t', 2);

    //saving to localStorage
    localStorage.setItem('Mydesignlist', JSON.stringify(diseños) );
    };
     
             
//RANKING DE VENTAS

var balanceVenta = (ev) =>{
    ev.preventDefault();  

    diseños.sort((a,b) => { return (a.ammountSold < b.ammountSold) ? 1 : -1 });   

    document.getElementById("name1").innerHTML = diseños[0].designName;
    document.getElementById("stock1").innerHTML = diseños[0].currentStock;
    document.getElementById("price1").innerHTML =  "$" + diseños[0].priceEa;
    document.getElementById("sold1").innerHTML = diseños[0].ammountSold;
    document.getElementById("lastProduction1").innerHTML = diseños[0].productionAmmount;
//  document.getElementById("earnings1").innerHTML = resultado de price x sold

    document.getElementById("name2").innerHTML = diseños[1].designName;
    document.getElementById("stock2").innerHTML = diseños[1].currentStock;
    document.getElementById("price2").innerHTML = "$" +  diseños[1].priceEa;
    document.getElementById("sold2").innerHTML = diseños[1].ammountSold;
    document.getElementById("lastProduction2").innerHTML = diseños[1].productionAmmount;
//  document.getElementById("earnings1").innerHTML = resultado de price x sold

    document.getElementById("name3").innerHTML = diseños[2].designName;
    document.getElementById("stock3").innerHTML = diseños[2].currentStock;
    document.getElementById("price3").innerHTML =  "$" + diseños[2].priceEa;
    document.getElementById("sold3").innerHTML = diseños[2].ammountSold;
    document.getElementById("lastProduction3").innerHTML = diseños[2].productionAmmount;
//  document.getElementById("earnings1").innerHTML = resultado de price x sold

    document.getElementById("name4").innerHTML = diseños[3].designName;
    document.getElementById("stock4").innerHTML = diseños[3].currentStock;
    document.getElementById("price4").innerHTML = "$" + diseños[3].priceEa;
    document.getElementById("sold4").innerHTML = diseños[3].ammountSold;
    document.getElementById("lastProduction4").innerHTML = diseños[3].productionAmmount;
//  document.getElementById("earnings1").innerHTML = resultado de price x sold

    document.getElementById("name5").innerHTML = diseños[4].designName;
    document.getElementById("stock5").innerHTML = diseños[4].currentStock;
    document.getElementById("price5").innerHTML = "$" + diseños[4].priceEa;
    document.getElementById("sold5").innerHTML = diseños[4].ammountSold;
    document.getElementById("lastProduction5").innerHTML = diseños[4].productionAmmount;
//  document.getElementById("earnings1").innerHTML = resultado de price x sold

    document.getElementById("name6").innerHTML = diseños[5].designName;
    document.getElementById("stock6").innerHTML = diseños[5].currentStock;
    document.getElementById("price6").innerHTML = "$" + diseños[5].priceEa;
    document.getElementById("sold6").innerHTML = diseños[5].ammountSold;
    document.getElementById("lastProduction6").innerHTML = diseños[5].productionAmmount;
//  document.getElementById("earnings1").innerHTML = resultado de price x sold

    document.getElementById("name7").innerHTML = diseños[6].designName;
    document.getElementById("stock7").innerHTML = diseños[6].currentStock;
    document.getElementById("price7").innerHTML = "$" + diseños[6].priceEa;
    document.getElementById("sold7").innerHTML = diseños[6].ammountSold;
    document.getElementById("lastProduction7").innerHTML = diseños[6].productionAmmount;
//  document.getElementById("earnings1").innerHTML = resultado de price x sold

    document.getElementById("name8").innerHTML = diseños[7].designName;
    document.getElementById("stock8").innerHTML = diseños[7].currentStock;
    document.getElementById("price8").innerHTML = "$" + diseños[7].priceEa;
    document.getElementById("sold8").innerHTML = diseños[7].ammountSold;
    document.getElementById("lastProduction8").innerHTML = diseños[7].productionAmmount;
//  document.getElementById("earnings1").innerHTML = resultado de price x sold

    document.getElementById("name9").innerHTML = diseños[8].designName;
    document.getElementById("stock9").innerHTML = diseños[8].currentStock;
    document.getElementById("price9").innerHTML = "$" + diseños[8].priceEa;
    document.getElementById("sold9").innerHTML = diseños[8].ammountSold;
    document.getElementById("lastProduction9").innerHTML = diseños[8].productionAmmount;
//  document.getElementById("earnings1").innerHTML = resultado de price x sold

    document.getElementById("name10").innerHTML = diseños[9].designName;
    document.getElementById("stock10").innerHTML = diseños[9].currentStock;
    document.getElementById("price10").innerHTML = "$" + diseños[9].priceEa;
    document.getElementById("sold10").innerHTML = diseños[9].ammountSold;
    document.getElementById("lastProduction10").innerHTML = diseños[9].productionAmmount;
//  document.getElementById("earnings1").innerHTML = resultado de price x sold

}

//Con esto estoy agarrando dos elementos del indice 0 y concatenandolos (BOCETO PROVISORIO)
const display = (ev)=>{
    ev.preventDefault();  

        var a = parseInt(diseños[0].currentStock);
        var b = parseInt(diseños[0].productionAmmount);
        var earned = diseños[0].priceEa * diseños[0].ammountSold;
        var stockSum= a + b;

        var resultadoProvisorio = "La remera con el Diseño: " + diseños[0].designName + " tenia en stock " + diseños[0].productionAmmount +
         " remeras antes de comenzar, pero luego de esta produccion seran " +  stockSum + "." + "<br>" +  "Si se vendieron " + diseños[0].ammountSold + 
         " ganaré $" + earned;

         //Que aparezca un boton con el nombre del diseño
        var obj1Name = diseños[0].designName;
     
        document.getElementById("buttonAppear1").innerHTML = "<button onclick=\"secondFunction()\"></button>";
        document.getElementById("buttonAppear1").innerHTML = obj1Name;
        document.getElementById("demo1").innerHTML = resultadoProvisorio;   
}
    document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('agregarDiseño').addEventListener('click', addDesign);
    document.getElementById('display').addEventListener('click', display);
    document.getElementById('balanceVenta').addEventListener('click', balanceVenta);
}); 