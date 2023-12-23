


    let firstNummber = prompt("Digite o primeiro número")
    let secondNumber = prompt("Digite o segundo número")

    let sum = (Number(firstNummber) + Number(secondNumber))
    let sub = (Number(firstNummber) - Number(secondNumber))
    let mult = (Number(firstNummber) * Number(secondNumber))
    let div = (Number(firstNummber) / Number(secondNumber))
    let divRest = (Number(firstNummber) % Number(secondNumber))
    
    alert(`O resultado da soma dos dois números é ${sum}`)
    alert(`O resultado da subtração dos dois números é ${sub}`)
    alert(`O resultado da multiplicação dos dois números é ${mult}`)
    alert(`O resultado da divisão dos dois números é ${div}`)
    alert(`O resultado do resto da divisão dos dois números é ${divRest}`)

    if(sum % 2 === 0) {
        alert(`A soma dos dois números é par: ${sum}`)
    } else {
        alert(`A soma dos dois números é ímpar ${sum}`)
    }

    if(firstNummber === secondNumber) {
        alert("O primeiro e o segundo número são iguais")
    } else {
        alert("O primeiro e o segundo número são diferentes")
    }