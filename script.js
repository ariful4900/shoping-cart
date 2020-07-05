//Phone item decrement
const phoneMinus = document.getElementById("phoneMinus")
phoneMinus.addEventListener("click", ()=>{
const itemDecrement = itemMinus("phoneItem");

    
})
//Phone item Increment
const phonePlus = document.getElementById("phonePlus")
phonePlus.addEventListener("click", ()=>{
    const itemIncrement = itemPlus("phoneItem");
    priceUp("phonePrice");
})
//Casing item decrement
const caseMinus = document.getElementById("caseMinus")
caseMinus.addEventListener("click", ()=>{
const caseDecrement = itemMinus("caseItem");
    
})
//Casing item Increment
const casePlus = document.getElementById("casePlus")
casePlus.addEventListener("click", ()=>{
    const caseIncrement = itemPlus("caseItem");
    
})
//Related Function

function itemMinus(id){
    const minus = document.getElementById(id).value--
    return minus;
}
function itemPlus(id){
    const plus = document.getElementById(id).value++
    return plus;
}

function priceUp(id){
    const price = document.getElementById(id).innerText;
    const priceAmount = parseFloat(price);
    const total = priceAmount + 1219;
    document.getElementById(id).innerText = total;
}
function priceUp(id){
    const price = document.getElementById(id).innerText;
    const priceAmount = parseFloat(price);
    const total = priceAmount + 1219;
    document.getElementById(id).innerText = total;
}