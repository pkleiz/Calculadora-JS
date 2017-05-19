/**
 * Created by Pedro Kleiz on 19/05/2017.
 */


function calcular() {
    var operacao = document.getElementById('operacao').value;
    var num1 =parseFloat(document.getElementById('num1').value);
    var num2 =parseFloat( document.getElementById('num2').value);

    if(num1 == '' || num1 == null)
    {
        alert("Favor preencher os dois campos");
        return false;
    }

    if(num2 == '' || num2 == null)
    {
        alert("Favor preencher os dois campos");
        return false;
    }

    if(operacao == '' || operacao == null)
    {
        alert("Favor escolher a operação");
        return false;
    }

    if (operacao == 1)
    {
        var total=num1-num2;

    }
    else if(operacao==2)
    {
        var total=num1+num2;
    }
    else if(operacao==3)
    {
        var total=num1*num2;
    }
    else if(operacao==4)
    {
        var total=num1/num2;
    }
    else
    {
        return false;
    }
    document.getElementById('resultado').value = total;
}