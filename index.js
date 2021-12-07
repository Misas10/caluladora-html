let screen = document.getElementById("screen");

// cria um array de tags 'btn'
let btns = Array.from(document.getElementsByClassName("btn"))

console.log(btns)

btns.map(btn => {
    btn.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case 'log':
                // realiza apenas se o acrã já tiver numeros
                if (screen.innerText)
                    screen.innerText = Math.log(screen.innerText)
                break

            case 'π':
                screen.innerText += Math.PI.toFixed(8)
                break

            case 'x²':
                if (screen.innerText)
                    screen.innerText **= 2
                break

            case '√':
                if (screen.innerText)
                    screen.innerText = Math.sqrt(screen.innerText)
                break

            case '%':
                if (screen.innerText)
                    screen.innerText = screen.innerText / 100
                break

            case 'CE':
                if (screen.innerText)
                    screen.innerText = screen.innerText.slice(0, -1)
                break

            case 'C':
                screen.innerText = " "
                break

            case '=':
                try {
                    // Faz o calcula o valor da expressão
                    screen.innerText = eval(screen.innerText)

                } catch (error) {
                    screen.innerText = "Erro!"
                }
                break

            default:
                screen.innerText += e.target.innerText
        }
    })
})