//money transection
var customer = "";
var sender = "", senderBalance = "", senderAmount = "";
var receiverName = "", receiverAmount = "";
var amount = "";
var titleChnage

for (let i = 1; i <= 10; i++) {
    document.getElementById("btn" + [i]).addEventListener("click", function () {
        customer = document.getElementById("member" + [i]);
        sender = customer.querySelectorAll("td")[0].innerHTML;
        senderBalance = customer.querySelectorAll("td")[2].innerHTML;

        titleChnage = document.getElementById("sendmoney");
        titleChnage.querySelector(".modal-title").textContent = sender + ' is sending money';

    });
}
console.log(senderBalance);

document.getElementById("sendButton").addEventListener("click", function () {
    receiverName = document.getElementById("enterName").value;
    amount = document.getElementById("enterAmount").value;

    if ((senderBalance - amount) < 2000) {
        alert("insufficient Balance");
    }
    else {
        receiverAmount = Number(document.getElementById(receiverName).innerHTML) + Number(amount);
        senderAmount = Number(senderBalance) - Number(amount);
        // console.log(receiverName,amount,receiverAmount,senderAmount);
        customer.querySelectorAll("td")[2].innerHTML = senderAmount;
        document.getElementById(receiverName).innerHTML = receiverAmount;


        //history
        var createTag = document.createElement("li");
        var tagContent = document.createTextNode(`${sender} sent $${amount} to ${receiverName} on ${Date()}`);
        createTag.appendChild(tagContent);
        var listBody = document.getElementById("list-body");
        // console.log(listBody);
        listBody.insertBefore(createTag, listBody.firstChild);
    }


});










