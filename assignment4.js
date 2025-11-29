// console.alert("JSloading fine")
function main() {
    let data = [
  {
    "id": 101,
    "name": "Alpha Product",
    "price": 299,
    "category": "Electronics"
  },
  {
    "id": 102,
    "name": "Beta Service",
    "price": 149,
    "category": "Subscription"
  },
  {
    "id": 103,
    "name": "Gamma Item",
    "price": 79,
    "category": "Accessories"
  }
];
 let containerElem = document.getElementById("container");
 for (let row of data){
    containerElem.innerHTML += 
        "<div class='card p-3'>" +
            "<h3>" + row.name + "</h3>" +
            "<p>Price: <strong>" + row.price + "</strong></p>" +
            "<div class='category-pill'>" + row.category + "</div>" +
        "</div>";
 }
}