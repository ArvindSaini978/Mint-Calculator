let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            document.getElementById('screen').className -="bgGreen";
            screen.value = screenValue;
        }
        else if (buttonText == '←') {
            screenValue = screen.value.slice(0, -1);
            screen.value = screenValue;
        }
        else if (screen.value.includes("%")) {

            size = screen.value.length;
            n = Number(screen.value.substring(0, size - 1));
            console.log(n);
            screen.value = n / 100;
        }
        else if (buttonText == 'sin') {
            size = screen.value.length;
            n = Number(screen.value.substring(0, size));
            console.log(n);
            buttonText = `sin(${n})`;
            screenValue = buttonText;
            screen.value = screenValue;
            screenValue = Math.sin(n);
        }
        else if (buttonText == 'cos') {
            size = screen.value.length;
            n = Number(screen.value.substring(0, size));
            buttonText = `cos(${n})`;
            screenValue = buttonText;
            screen.value = screenValue;
            screenValue = Math.cos(n);
        }
        else if (buttonText == 'tan') {
            size = screen.value.length;
            n = Number(screen.value.substring(0, size));
            buttonText = `tan(${n})`;
            screenValue = buttonText;
            screen.value = screenValue;
            screenValue = Math.tan(n);
        }
        else if (buttonText == 'ln') {
            size = screen.value.length;
            n = Number(screen.value.substring(0, size));
            buttonText = `ln(${n})`;
            screenValue = buttonText;
            screen.value = screenValue;
            screenValue = Math.log(n);
        }
        else if (buttonText == 'x²') {
            size = screen.value.length;
            n = Number(screen.value.substring(0, size));
            buttonText = `${n}^(${2})`;
            let sqr = n**2;
            screen.value = sqr;
        }
        else if (buttonText == 'e') {
            buttonText = Math.E;
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'π') {
            buttonText = Math.PI;
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText=='!'){
            screenValue += buttonText;
            screen.value = screenValue;
            num = screen.value.slice(0, -1);
            num = eval(num);
            function fact(x) {
                if (x == 0 || x == 1) {
                    return 1
                }
                return x * fact(x - 1);
            }
            screenValue = fact(num);
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            try {
                document.getElementById('screen').classList.toggle('bgGreen');
                screen.value = eval(screenValue);
            } catch {
                screen.value = "Error";
            }
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

