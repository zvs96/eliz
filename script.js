function openGame(){
    alert = confirm('Ցանկանում եք խաղալ ?')
    if(alert){
        prompt = prompt('Ասացեք ձեր անունը')
        if(!prompt || prompt.length == 0){
            name = 'Գվենիկ'
        }
        else{
            name = prompt
        }
        start = confirm('Սկսե՞նք ' + name + ' ջան')
        if(start){
            startGame()
        }
        else{
            confirm('Վերջին անգամ եմ հարցնում, Սկսենք ?')? startGame() : close()
        }
    }
    else{
        close()
    }    
}


let element = document.getElementById('content')
let input;
let lostNumber;
let numbers = []
let id;

for(var i=1; i<=100; i++){
    numbers.push(i)
}

numbers.sort(function() {
    return .5 - Math.random();
});

openGame()

function startGame(){
    lostNumber = []
    id = 0;
    number = document.getElementById('num').innerText = numbers[id];

    var elements = document.getElementsByClassName('lost');

    for(var i=0; elements.length; i++){
        elements[0].parentNode.removeChild(elements[0])
    }

}

function numberTest(){   

    number = document.getElementById('num').innerText = numbers[id];
    input = document.getElementById('input')
    
    if(number == input.value){
        id++;
        input.value = ''
        document.getElementById('num').innerText = numbers[id]
    }
    else{
        let el = document.createElement("div")
        el.setAttribute("class", "playNum lost");    
        input.value = ''  
        lostNumber.push(number)
        if(lostNumber.length <= 15){
            element.prepend(el)
            if(lostNumber.length == 15){
                alert('Պարտություն')
                final = confirm('Նորից խաղաս կյանք ՞') 

                if(final){
                    startGame()
                }
                else{
                    close()
                }

            }
        }
    }
}

startGame()
input = document.getElementById('input')

input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      numberTest()
    }
});
