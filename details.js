async function getdetails(){
const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");

const response= await axios.get (`https://dummyjson.com/products/${id}`) ;
const data= response.data;
console.log(data);
const{title,description,price,brand,thumbnail}=data;
console.log(description);

document.querySelector("h2").textContent=title;
document.querySelector(".brand").textContent=brand;
document.querySelector(".price").textContent=price;
document.querySelector(".desc").textContent=description;
document.querySelector("img").src=thumbnail;
}
getdetails();