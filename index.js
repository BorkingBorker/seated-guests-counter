let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let tableNumber = 1
let entries = []

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    entries.push(`Table ${tableNumber}: ${count}`)
    saveEl.textContent = entries.join(" - ")
    count = 0
    countEl.textContent = count
    tableNumber += 1
}
