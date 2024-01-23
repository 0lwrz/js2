var registerForm = document.querySelector(".registerForm");
registerForm.onsubmit = function(e){
    e.preventDefault();
    var amount = document.querySelector(".amount");
    var exchange = document.querySelector(".exchange");
    var usdRate =0.27;
    var jodRate = 0.19
    if (exchange.value=='USD'){
        document.querySelector(".result").innerHTML = amount.value * usdRate;
    }
    else if(exchange.value=='JOD'){
        document.querySelector(".result").innerHTML = amount.value * jodRate;
    }
    else if(exchange.value=='NIS'){
        document.querySelector(".result").innerHTML = amount.value;
    }
}
