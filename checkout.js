function getdata(){
    var card=document.getElementById("cardNo").value;

    var cvv=document.getElementById("cvv").value;
}

setTimeout(function(){
    if(card == 123456789 && cvv == 123){
        alert("Successful")
    } else{
        alert("Not Successful")
    }
},2000)