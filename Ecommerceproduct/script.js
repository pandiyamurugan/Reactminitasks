const API = "https://fakestoreapi.com/products"

const container = document.getElementById("products")
const loader = document.getElementById("loader")

let products = []
let editId = null

async function loadProducts(){

loader.style.display="block"

try{

const res = await fetch(API)
products = await res.json()

displayProducts(products)

}catch(error){
alert("Error loading products")
}

loader.style.display="none"

}

function displayProducts(list){

container.innerHTML=""

list.forEach(p=>{

const card = document.createElement("div")
card.className="card"

card.innerHTML=`

<img src="${p.image}">
<h3>${p.title}</h3>
<p>$${p.price}</p>

<div class="card-buttons">

<button class="edit" onclick="editProduct(${p.id})">Edit</button>
<button class="delete" onclick="deleteProduct(${p.id})">Delete</button>

</div>

`

container.appendChild(card)

})

}

document.getElementById("search").addEventListener("input",function(){

const value = this.value.toLowerCase()

const filtered = products.filter(p=>
p.title.toLowerCase().includes(value)
)

displayProducts(filtered)

})

function openForm(){

document.getElementById("formContainer").style.display="flex"

}

function closeForm(){

document.getElementById("formContainer").style.display="none"

editId=null

}

async function saveProduct(){

const title = document.getElementById("title").value
const price = document.getElementById("price").value
const category = document.getElementById("category").value
const image = document.getElementById("image").value
const description = document.getElementById("description").value

const product = {
title,
price,
category,
image,
description
}

if(editId){

await fetch(API+"/"+editId,{
method:"PUT",
body:JSON.stringify(product)
})

}else{

await fetch(API,{
method:"POST",
body:JSON.stringify(product)
})

}

closeForm()
loadProducts()

}

function editProduct(id){

const product = products.find(p=>p.id===id)

document.getElementById("title").value=product.title
document.getElementById("price").value=product.price
document.getElementById("category").value=product.category
document.getElementById("image").value=product.image
document.getElementById("description").value=product.description

editId=id

openForm()

}

async function deleteProduct(id){

if(confirm("Delete product?")){

await fetch(API+"/"+id,{
method:"DELETE"
})

loadProducts()

}

}

loadProducts()