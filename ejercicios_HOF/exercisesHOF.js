//ejercicio 1
const printMessage = (message) => console.log(message);
printMessage("hola")

//ejercicio 2
const createMultiplication = (number1, number2) => number1 * number2;

console.log(createMultiplication(5, 5))

//ejercicio 3
const array = [ 1,2,3,4,5,6,7,8,9 ];
let multplicationElements = array.map((element) => element * element+1);

console.log(multplicationElements)

//ejercicio 4
function mostAlcoholic (beers){
    const ordenadas = beers.toSorted((a,b => b.abv - a.abv).slice(0, 10));

    return ordenadas
}

console.log(mostAlcoholic(beers))

//ejercicio 5
function leastBitter (beers){
    const ord = beers.toSorted((a,b => a.ph - b.ph).slice(0, 10));
    return ord.reverse().slice(0, 10);
}

console.log(leastBitter(beers))

//ejercicio 6
function findByName (beers, name){
    const found = beers.find(beer => beer.name === name)
    return found
}

console.log(findByName(beers, "Corona"))

//ejercicio 7
function findByIbu (beers, ibu){
    const found = beers.find(beer => beer.ibu === ibu)
    return found
}

console.log(findByIbu(beers, 30))

//ejercicio 8
function beersPosition(beers, name) {
  const index = beers.findIndex(beer => beer.name === name);
  if (index !== -1) {
    return index;
  }else {
    console.log(`${name} does not exist.`);
  }
}

console.log(beersPosition(beers, "Bud Light"));

//ejercicio 9
function beersAbvFilter(beers, alcoholLevel) {
  return beers.filter(beer => beer.abv <= alcoholLevel).map(({ name, abv, ibu }) => ({ name, alcoholLevel: abv, bitterness: ibu }));
}

console.log(beersAbvFilter(beers, 5))

//ejercicio 10
function propertySort(beers, property, order) {
    return beers.sort((a, b) => {
      if (order) {
        return a[property] - b[property];
      }else {
        return b[property] - a[property];
    }}).slice(0, 10);
}

console.log(propertySort(beers, "ibu", true))

//ejercicio 11
function renderTable(beers, tableId) {
    const table = document.getElementById(tableId);
    const headerRow = table.insertRow(0);
    const headers = ["Name", "ABV", "IBU"];
    
    headers.forEach((header, index) => {
      const th = document.createElement("th");
      th.appendChild(document.createTextNode(header));
      headerRow.appendChild(th);
    });
  
    beers.forEach((beer, index) => {
      const row = table.insertRow(index + 1);
      const { name, abv, ibu } = beer;
      
      const cell1 = row.insertCell(0);
      cell1.appendChild(document.createTextNode(name));
      
      const cell2 = row.insertCell(1);
      cell2.appendChild(document.createTextNode(abv));
      
      const cell3 = row.insertCell(2);
      cell3.appendChild(document.createTextNode(ibu));
    });
  }
  

  const beersArray = [];
  renderTable(beersArray, "beerTable");