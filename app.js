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

    /*for display purposes only
    console.warn('added' , {diseños} );
    let pre = document.querySelector('#display pre');
    pre.textContent = '\n' + JSON.stringify(diseños, '\t', 2);
    */
    //saving to localStorage
    localStorage.setItem('Mydesignlist', JSON.stringify(diseños) );
    };
  
    var balanceVenta = (ev) => {
        ev.preventDefault();
      
        diseños.sort((a, b) => b.ammountSold - a.ammountSold);
      
        var prefixName = "name";
        var prefixStock = "stock";
        var prefixPrice = "price";
        var prefixSold = "sold";
        var prefixLastProd = "lastProduction";
      
        for (var index = 0; index < diseños.length; index++) {
          var suffix = index + 1;
          document.getElementById(prefixName + suffix).innerHTML = diseños[index].designName;
          document.getElementById(prefixStock + suffix).innerHTML = diseños[index].currentStock;
          document.getElementById(prefixPrice + suffix).innerHTML = "$" + diseños[index].priceEa;
          document.getElementById(prefixSold + suffix).innerHTML = diseños[index].ammountSold;
          document.getElementById(prefixLastProd + suffix).innerHTML = diseños[index].productionAmmount;
        }
      
      }

const display = (ev)=>{
    ev.preventDefault();  

        var a = parseInt(diseños[0].currentStock);
        var b = parseInt(diseños[0].productionAmmount);
        var earned = diseños[0].priceEa * diseños[0].ammountSold;
        var stockSum= a + b;


         //Que aparezca un boton con el nombre del diseño
        var obj1Name = diseños[0].designName;
     
        document.getElementById("buttonAppear1").innerHTML = "<button onclick=\"secondFunction()\"></button>";
        document.getElementById("buttonAppear1").innerHTML = obj1Name;
}
    document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('agregarDiseño').addEventListener('click',addDesign);
    document.getElementById('agregarDiseño').addEventListener('click',balanceVenta);
}); 