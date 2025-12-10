const state = [
    4, 0, 0, 2,
    0, 0, 0, 0,
    0, 0, 0, 2,
    2, 0, 0, 0
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

// 生成随即方块
function generateRandomBlock() {
    const arr = []
    for (let i = 0; i < state.length; i++) {
        if (state[i] === 0) {
            arr.push(i)
        }

    }
    const index = Math.floor(Math.random() * arr.length)
    state[arr[index]] = 2
}

function checkGameEnd() {
    // 遍历每一个格子，上下左右是否相同，没有的就当作不同，出现有相同的情况就继续游戏，反之则game out。
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {

            // 左边
            if (j != 0 && state[i * 4 + j] == state[i * 4 + j - 1]) {
                return false;
            }

            // 右边
            if (j != 3 && state[i * 4 + j] == state[i * 4 + j + 1]) {
                return false;
            }
            
            // 上边
            if (i != 0 && state[i * 4 + j] == state[(i - 1) * 4 + j]) {
                return false;
            }

            // 下边
            if (i != 3 && state[i * 4 + j] == state[(i + 1) * 4 + j]) {
                return false;
            }
        }
    }
    return true;
}

// 渲染render
function render() {
    const elements = document.getElementsByClassName("block")
    console.log(elements)
    const arr = Array.from(elements)
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        const list = Array.from(arr[i].classList)
        const numClass = list.find(c => c.startsWith("num"))
        arr[i].classList.remove(numClass)

        if (state[i] == 0) {
            arr[i].textContent = ""
            arr[i].classList.remove("color")

        }
        else {
            arr[i].textContent = state[i]
            arr[i].classList.add("color")
            arr[i].classList.add("num" + state[i])
        }
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
    if(checkGameEnd()){
        setTimeout(() => alert("Game Out !"))
    }

})


