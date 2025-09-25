const state = [
    0, 0, 0, 0,
    2, 2, 0, 0,
    0, 4, 0, 0,
    0, 0, 0, 0
]


function left() {
    const lines = []
    for (let i = 0; i < 4; i++) {
        const line = []
        for (let j = 0; j < 4; j++) {
            line.push(state[i * 4 + j])
        }
        let newLine = line.filter(function (n) {
            return n !== 0
        })
        for (let i = 0; i < newLine.length; i++) {
            if (newLine[i] === newLine[i + 1]) {
                newLine[i] = newLine[i] * 2
                newLine[i + 1] = 0
                i++
            }
        }
        newLine = newLine.filter(function (n) {
            return n !== 0
        })
        while (newLine.length < 4) {
            newLine.push(0)
        }
        lines.push(newLine)
    }
    console.log(lines)
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        for (let j = 0; j < line.length; j++) {
            state[i * 4 + j] = line[j]
        }
    }
}

function right() {
    const lines = []
    for (let i = 0; i < 4; i++) {
        const line = []
        for (let j = 0; j < 4; j++) {
            line.push(state[i * 4 + j])
        }
        line.reverse()
        let newLine = line.filter(function (n) {
            return n !== 0
        })
        for (let i = 0; i < newLine.length; i++) {
            if (newLine[i] === newLine[i + 1]) {
                newLine[i] = newLine[i] * 2
                newLine[i + 1] = 0
                i++
            }
        }
        newLine = newLine.filter(function (n) {
            return n !== 0
        })
        while (newLine.length < 4) {
            newLine.push(0)
        }
        newLine.reverse()
        lines.push(newLine)
    }
    console.log(lines)
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        for (let j = 0; j < line.length; j++) {
            state[i * 4 + j] = line[j]
        }
    }
}

function up() {
    const lines = []
    for (let i = 0; i < 4; i++) {
        const line = []
        for (let j = 0; j < 4; j++) {
            line.push(state[j * 4 + i])
        }
        let newLine = line.filter(function (n) {
            return n !== 0
        })
        for (let i = 0; i < newLine.length; i++) {
            if (newLine[i] === newLine[i + 1]) {
                newLine[i] = newLine[i] * 2
                newLine[i + 1] = 0
                i++
            }
        }
        newLine = newLine.filter(function (n) {
            return n !== 0
        })
        while (newLine.length < 4) {
            newLine.push(0)
        }
        lines.push(newLine)
    }
    console.log(lines)
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        for (let j = 0; j < line.length; j++) {
            state[j * 4 + i] = line[j]
        }
    }
}

function down() {
    const lines = []
    for (let i = 0; i < 4; i++) {
        const line = []
        for (let j = 0; j < 4; j++) {
            line.push(state[j * 4 + i])
        }
        line.reverse()
        let newLine = line.filter(function (n) {
            return n !== 0
        })
        for (let i = 0; i < newLine.length; i++) {
            if (newLine[i] === newLine[i + 1]) {
                newLine[i] = newLine[i] * 2
                newLine[i + 1] = 0
                i++
            }
        }
        newLine = newLine.filter(function (n) {
            return n !== 0
        })
        while (newLine.length < 4) {
            newLine.push(0)
        }
        newLine.reverse()
        lines.push(newLine)
    }
    console.log(lines)
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        for (let j = 0; j < line.length; j++) {
            state[j * 4 + i] = line[j]
        }
    }
}

function generateRandomBlock(){
    const arr = []
    for(let i = 0; i < state.length; i++){
        if (state[i] === 0){
            arr.push(i)
        }

    }
    const index = Math.floor(Math.random()*arr.length)
    state[arr[index]] = 2
}

function render() {
    const elements = document.getElementsByClassName("block")
    console.log(elements)
    const arr = Array.from(elements)
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        arr[i].textContent = state[i]
    }
}
render()


window.addEventListener("keydown", function (event) {
    console.log(event, event.key)
    if (event.key === "ArrowLeft") {
        left()
    }
    else if (event.key === "ArrowRight") {
        right()
    }
    else if (event.key === "ArrowUp") {
        up()
    } else if (event.key === "ArrowDown") {
        down()
    }
    generateRandomBlock()
    render()

})


