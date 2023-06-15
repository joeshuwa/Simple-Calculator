document.addEventListener('DOMContentLoaded', () => {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('.btn');
    const clear = document.querySelector('.clear-btn');
    const equal = document.querySelector('.equal-btn');
    const del = document.querySelector('.del-btn');
    let lastInputIsSymbol = false;


    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
        e.preventDefault();
        let display = e.target.dataset.num;
        

        if (
            (display === '.' && screen.value.includes('.')) || // Check for dot repetition
            (
            (display === '+' || display === '-' || display === '*' || display === '/') && 
            lastInputIsSymbol
            ) // Check for symbol repetition
            ) {
            return; // Do not allow repetition of symbols or dot
            }

            screen.value += display;
            lastInputIsSymbol = display === '+' || display === '-' || display === '*' || display === '/';

    });
    });

    //Function of the Clear button

    clear.addEventListener('click', ()=>{
        screen.value = ""
        lastInputIsSymbol = false;
    })

    // Function of the Equal button

    equal.addEventListener('click', (e)=>{
        if (screen.value ==""){
            screen.value = ""
        }else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    //Function of the Delete button

    del.addEventListener('click', ()=>{
        screen.value = screen.value.slice(0,-1)
        lastInputIsSymbol =
        screen.value.slice(-1) === '+' ||
        screen.value.slice(-1) === '-' ||
        screen.value.slice(-1) === '*' ||
        screen.value.slice(-1) === '/';


    })

    //Avoid repetition of the dot button

});