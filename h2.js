let state = [
    4, 0, 0, 2,
    0, 0, 0, 0,
    0, 0, 0, 2,
    2, 0, 0, 0
]
let moveCount = 0;


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
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i]
        for (let j = 0; j < line.length; j++) {
            state[j * 4 + i] = line[j]
        }
    }
}

// 生成随即位置方块=2
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
    for (let row = 0; row < 4; row++) {
        for (let column = 0; column < 4; column++) {
            const current = state[row * 4 + column];
            if (current == 0){
                return false;
            }

            // 左边
            if (column != 0 && current == state[row * 4 + column - 1]) {
                console.log(row,column,current,state[row * 4 + column - 1])
                return false;
            }

            // 右边
            if (column != 3 && current == state[row * 4 + column + 1]) {
                console.log(row,column,current,state[row * 4 + column + 1])
                return false;
            }

            // 上边
            if (row != 0 && current == state[(row - 1) * 4 + column]) {
                console.log(row,column,current,state[(row - 1) * 4 + column])
                return false;
            }

            // 下边
            if (row != 3 && current == state[(row + 1) * 4 + column]) {
                console.log(row,column,current,state[(row + 1) * 4 + column])
                return false;
            }
        }
    }
    console.log([...state])
    return true;
}

// 计算分数
function calcScore() {
    let sum = 0;
    for (let i = 0; i < state.length; i++) {
        if (state[i] > 2) {
            sum = sum + state[i];
        }
    }
    return sum;
}

// 重新开始
function restartGame() {
    state = [
        4, 0, 0, 2,
        0, 0, 0, 0,
        0, 0, 0, 2,
        2, 0, 0, 0
    ]
    moveCount = 0;
    render()

}

// 渲染render
function render() {
    const elements = document.getElementsByClassName("block")
    const arr = Array.from(elements)
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

    const scoreElement = document.getElementsByClassName("score")[0]
    scoreElement.textContent = "分数：" + calcScore()

    const moveCountElement = document.getElementsByClassName("moveCount")[0]
    moveCountElement.textContent = "移动次数：" + moveCount
}
render()

window.addEventListener("keydown", function (event) {
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
    moveCount++

    generateRandomBlock()
    render()
    if (checkGameEnd()) {
        setTimeout(() => alert("Game Out !"))
        const restarBtnElement = document.getElementsByClassName("restartBtn")[0]
        restarBtnElement.classList.add("show")

    }

})


