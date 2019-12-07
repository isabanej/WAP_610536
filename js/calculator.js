function calcTip() {
    var subtotalElem = document.getElementById('subtotal');
    var tipElem = document.getElementById('tip');
    var totalElem = document.getElementById('total');
    var subtotal = document.getElementById('subtotal');
    var tip = ((tipElem.value)/100)*subtotal.value;
    var subTotalVal = subtotal.value;
    console.log("tip"+tip)
    console.log("total"+subTotalVal)
    totalElem.innerHTML = '$' + (parseInt(subTotalVal)+tip);
}