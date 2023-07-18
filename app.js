var mobiles = {
    samsung:{
     galaxyA04s: {
        camera: "50mp",
        ram: "8gb",
        rom: "128gb",
        price: "44,999.00",  
     },  
     galaxyA04: {
        camera: "50mp",
        ram: "8gb",
        rom: "128gb",
        price: "37,500.00",  
     }, 
     galaxyA23: {
        camera: "50mp",
        ram: "8gb",
        rom: "128gb",
        price: "78,500.00",  
     }, 
    },
   iphone:{
       iphne13pro: {
           camera: "128mp",
           ram: "12gb",
           rom: "256gb",
           price: "300,999.00",  
        },  
        iphne12pro: {
           camera: "50mp",
           ram: "8gb",
           rom: "128gb",
           price: "236,999.00",  
        }, 
        iphne11pro: {
           camera: "50mp",
           ram: "8gb",
           rom: "128gb",
           price: "226,599.00",  
        }, 
       },
       tecno:{
        TecnoCamon18P: {
            camera: "50mp",
            ram: "8gb",
            rom: "128gb",
            price: "45,499.00",  
         },  
         TecnoPop7: {
            camera: "50mp",
            ram: "2gb",
            rom: "64gb",
            price: "26,999.00",  
         }, 
         TecnoSpark9T: {
            camera: "50mp",
            ram: "4gb",
            rom: "64gb",
            price: "39,999.00",  
         }, 
        },
        Infinix:{
            InfinixHot12: {
                camera: "50mp",
                ram: "6gb",
                rom: "128gb",
                price: "42,499.00",  
             },  
             InfinixZero20: {
                camera: "50mp",
                ram: "8gb",
                rom: "256gb",
                price: "84,999.00",  
             }, 
             InfinixNote30: {
                camera: "50mp",
                ram: "8gb",
                rom: "128gb",
                price: "64,999.00",  
             }, 
            },
};

     
var modelDropdown = document.getElementById("modelDropdown");
 for (var brand in mobiles) {  
 for (var model in mobiles[brand]) {
   var option = document.createElement("option");
       option.value = model;
       option.textContent = model;
       modelDropdown.appendChild(option);
     }
 }

  modelDropdown.addEventListener("change", function () {
  var selectedModel = this.value;
  var brand;
  var details;

   for (var b in mobiles) {
    if (mobiles[b].hasOwnProperty(selectedModel)) {
       brand = b;
       details = mobiles[b][selectedModel];
        break;
      }
   }

 document.getElementById("camera").textContent = details.camera;
 document.getElementById("ram").textContent = details.ram;
 document.getElementById("rom").textContent = details.rom;
 document.getElementById("price").textContent = details.price;
});