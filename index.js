const divAdd = () => {
    const div = document.createElement('div')
    div.textContent = 'Работа с DOM'
}
const main = () => {
    const main = document.getElementById('main')
    const a = document.createElement('a')
    a.href = 'https://learn.javascript.ru/dom-nodes'
    a.textContent = 'DOM'
    main.append(a)
}
const changeColor = (color) => {
document.body.style.backgroundColor = color
}
const addList = () => {
    const list = document.getElementById('list')
    const li = document.createElement('li')
    li.textContent = text
    list.append(li)
}
const removeCopyright = () => {
    const copyright = document.getElementById('copyright')
    copyright.remove()
}