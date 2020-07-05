//Phone item decrement
const phoneMinus = document.getElementById("phoneMinus")
phoneMinus.addEventListener("click", () => {
    const itemDecrement = itemMinus("phoneItem");
    // itemMinus(taxPercent)
    const itemBalance = priceNumber("phoneSingle");
    const phonePrice = priceNumber("phonePrice");
    const itemPriceDown = priceDown(phonePrice, itemBalance)
    document.getElementById("phonePrice").innerText = itemPriceDown;

    //subTotal
    const netTotal = priceNumber("netTotal");
    const netTotalDown = priceDown(netTotal, itemBalance)
    document.getElementById("netTotal").innerText = netTotalDown;
    //tax
    const taxNumber = priceNumber("tax");
    const taxAmount = tax("taxPercent", netTotalDown);
    document.getElementById("tax").innerText = taxAmount;

    //Grand total
    const grandTotal = priceNumber("grandTotal");
    const grandTotalAmount = priceUp(netTotalDown, taxAmount);
    document.getElementById("grandTotal").innerText = grandTotalAmount;


})
//Phone item Increment
const phonePlus = document.getElementById("phonePlus")
phonePlus.addEventListener("click", () => {
    const itemIncrement = itemPlus("phoneItem");
    // itemPlus(taxPercent)
    const itemBalance = priceNumber("phoneSingle");
    const phonePrice = priceNumber("phonePrice");
    const itemPriceUp = priceUp(phonePrice, itemBalance)

    document.getElementById("phonePrice").innerText = itemPriceUp;

    //subTotal
    const netTotal = priceNumber("netTotal");
    const netTotalUp = priceUp(netTotal, itemBalance)
    document.getElementById("netTotal").innerText = netTotalUp;
    //Tax
    const taxNumber = priceNumber("tax");
    const taxAmount = tax("taxPercent", netTotalUp);
    document.getElementById("tax").innerText = taxAmount;

    //Grand total
    const grandTotal = priceNumber("grandTotal");
    const grandTotalAmount = priceUp(netTotalUp, taxAmount);
    document.getElementById("grandTotal").innerText = grandTotalAmount;
})
//Casing item decrement
const caseMinus = document.getElementById("caseMinus")
caseMinus.addEventListener("click", () => {
    const caseDecrement = itemMinus("caseItem");
    const caseSingle = priceNumber("caseSingle");
    const casePrice = priceNumber("casePrice");
    const itemCasePriceDown = priceDown(casePrice, caseSingle);

    document.getElementById("casePrice").innerText = itemCasePriceDown;

    //subTotal
    const netTotal = priceNumber("netTotal");
    const netTotalDown = priceDown(netTotal, caseSingle)
    document.getElementById("netTotal").innerText = netTotalDown;
    //tax
    const taxNumber = priceNumber("tax");
    const taxAmount = tax("taxPercent", netTotalDown);
    document.getElementById("tax").innerText = taxAmount;

    //Grand total
    const grandTotal = priceNumber("grandTotal");
    const grandTotalAmount = priceUp(netTotalDown, taxAmount);
    document.getElementById("grandTotal").innerText = grandTotalAmount;

})
//Casing item Increment
const casePlus = document.getElementById("casePlus")
casePlus.addEventListener("click", () => {
    const caseIncrement = itemPlus("caseItem");
    const caseSingle = priceNumber("caseSingle");
    const casePrice = priceNumber("casePrice");
    const itemCasePriceUp = priceUp(caseSingle, casePrice);

    document.getElementById("casePrice").innerText = itemCasePriceUp;


    //subTotal
    const netTotal = priceNumber("netTotal");
    const netTotalUp = priceUp(netTotal, caseSingle)
    document.getElementById("netTotal").innerText = netTotalUp;
    //Tax
    const taxNumber = priceNumber("tax");
    const taxAmount = tax("taxPercent", netTotalUp);
    document.getElementById("tax").innerText = taxAmount;

    //Grand total
    const grandTotal = priceNumber("grandTotal");
    const grandTotalAmount = priceUp(netTotalUp, taxAmount);
    document.getElementById("grandTotal").innerText = grandTotalAmount;
})
//Tax Button
const taxMinus = document.getElementById("taxMinus")
taxMinus.addEventListener("click", () => {
    document.getElementById("taxPercent").value--

    const taxNumber = priceNumber("tax");
    const netTotal = priceNumber("netTotal");
    const taxAmount = tax("taxPercent", netTotal);
    document.getElementById("tax").innerText = taxAmount;
    //Grand total
    const grandTotal = priceNumber("grandTotal");
    const grandTotalAmount = priceUp(netTotal, taxAmount);
    document.getElementById("grandTotal").innerText = grandTotalAmount;


});
const taxPlus = document.getElementById("taxPlus");
taxPlus.addEventListener("click", () => {
    document.getElementById("taxPercent").value++
    const taxNumber = priceNumber("tax");
    const netTotal = priceNumber("netTotal");
    const taxAmount = tax("taxPercent", netTotal);
    document.getElementById("tax").innerText = taxAmount;
    //GrandTotal
    const grandTotal = priceNumber("grandTotal");
    const grandTotalAmount = priceUp(netTotal, taxAmount);
    document.getElementById("grandTotal").innerText = grandTotalAmount;

})
//Related Function

function itemMinus(id) {
    const minus = document.getElementById(id).value--
    return minus;
}
function itemPlus(id) {
    const plus = document.getElementById(id).value++
    return plus;
}
function inputValue(id) {
    const input = document.getElementById(id).value;
    const inputNumber = parseFloat(input)
    return inputNumber;
}
//convert to the number
function priceNumber(id) {
    const price = document.getElementById(id).innerText;
    const priceAmount = parseFloat(price);
    return priceAmount;
}
function priceUp(price, balance) {
    const total = price + balance;
    return total;
}
function priceDown(price, balance) {
    const total = price - balance;
    return total;
}

//tax
function tax(id, number) {
    const taxBalance = inputValue(id)
    const taxAmount = number / 100 * taxBalance;
    return taxAmount;
}
// Remove Phone Section
const phoneRemove = document.getElementById("phoneRemove");
phoneRemove.addEventListener("click", () => {
    const phoneArea = document.getElementById("phoneArea")
    phoneArea.style.display = "none";
    //subTotal
    const phonePrice = priceNumber("phonePrice");
    const netTotal = priceNumber("netTotal");
    const netTotalUp = priceDown(netTotal, phonePrice)
    document.getElementById("netTotal").innerText = netTotalUp;

     //Tax
     const taxNumber = priceNumber("tax");
     const taxAmount = tax("taxPercent", netTotalUp);
     document.getElementById("tax").innerText = taxAmount;
 
     //Grand total
     const grandTotal = priceNumber("grandTotal");
     const grandTotalAmount = priceUp(netTotalUp, taxAmount);
     document.getElementById("grandTotal").innerText = grandTotalAmount;

})
// Remove Casing Section
const caseRemove = document.getElementById("caseRemove");
caseRemove.addEventListener("click", () => {
    const caseArea = document.getElementById("caseArea")
    caseArea.style.display = "none";
    //subTotal
    const casePrice = priceNumber("casePrice");
    const netTotal = priceNumber("netTotal");
    const netTotalUp = priceDown(netTotal, casePrice)
    document.getElementById("netTotal").innerText = netTotalUp;

    //Tax
    const taxNumber = priceNumber("tax");
    const taxAmount = tax("taxPercent", netTotalUp);
    document.getElementById("tax").innerText = taxAmount;

    //Grand total
    const grandTotal = priceNumber("grandTotal");
    const grandTotalAmount = priceUp(netTotalUp, taxAmount);
    document.getElementById("grandTotal").innerText = grandTotalAmount;

})