// NOTE: load funksjon
function load(){
  loadBefolkning();
  loadSysselsatte();
  loadUtdanning();
}


var output = document.getElementById('oversikt');

// NOTE: første konstruktør
function loadBefolkning(input){
  console.log(input);
  var url1 = "http://wildboy.uib.no/~tpe056/folk/104857.json";
  var xhr1 = new XMLHttpRequest();
  xhr1.open("GET", url1)
  xhr1.onreadystatechange = function(){
    if(xhr1.readyState === 4 ){
      if(xhr1.status === 200){
        befolkningElmenter = JSON.parse(xhr1.responseText);
        console.log(befolkningElmenter);
        getNames(output, befolkningElmenter);
        getInfo(output, befolkningElmenter, input);
        loop(output, befolkningElmenter);
      }else {
        throw "Noe gikk galt";
      }
    return befolkningElmenter;
    }
  };
  xhr1.send();


}

function getNames(kommuneNavn, data){
  for (var komNavn in data.elementer){
    //console.log(komNavn);
  }return komNavn;
}

// NOTE: table elementer

function loop(output, data){

  var table = document.getElementById("tb");

  for (let key in data.elementer){
    //console.log(key, data.elementer[key].Kommunenummer);
    //console.log(key, data.elementer[key].Menn[2018]);
    //console.log(key, data.elementer[key].Kvinner[2018]);

    //var tr = document.createElement("tr");
    var kommunenummer = data.elementer[key].kommunenummer;
    var Menn = data.elementer[key].Menn[2018];
    var Kvinner = data.elementer[key].Kvinner[2018];
    var Kommunenavn = key;


    newKom = document.createTextNode(kommunenummer);
    newMenn = document.createTextNode(Menn)
    newkvinn = document.createTextNode(Kvinner)
    newKomNavn = document.createTextNode(Kommunenavn)


    tablerow = document.createElement("tr")
    table.appendChild(tablerow)

    tabledata1 = document.createElement("td")
    tabledata2 = document.createElement("td")
    tabledata3 = document.createElement("td")
    tabledata4 = document.createElement("td")

    tabledata1.appendChild(newKom)
    tabledata2.appendChild(newKomNavn)
    tabledata3.appendChild(newMenn)
    tabledata4.appendChild(newkvinn)

    tablerow.appendChild(tabledata1)
    tablerow.appendChild(tabledata2)
    tablerow.appendChild(tabledata3)
    tablerow.appendChild(tabledata4)


  }
}


function getInfo(komNum, data, input){
  loop(output, data);

  }


window.onload = load;
