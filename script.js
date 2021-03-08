var onSubmit = function () {
    var total = document.getElementById('bill-total').value;
    var satisfied = document.getElementById('serviceSatisfaction').value;
    var people = document.getElementById('people').value
    var tip = 0
    if (satisfied === 'Bad') tip = total *10/100
    else if (satisfied === 'okay') tip = total *13/100
    else if (satisfied === 'good') tip = total *17/100
    else tip = total * 20 / 100
    tip += total * people / 100
    document.getElementById('tip').innerHTML = `Tip is: ${tip} `
}