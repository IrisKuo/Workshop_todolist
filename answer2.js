
const STORAGE_KEY = 'TODOS'
// let data = [({ name: 'ruby' }, { name: 'JS' })] // {id: '', content: ''}

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('ul')
  const addBtnEl = document.querySelector('.addBtn')
  initRender(storageState(STORAGE_KEY, []), listContainer)

  addBtnEl.addEventListener('click', addToDo(listContainer))

  listContainer.addEventListener('click', (e) => {
    if (e.target.className === 'close') {
      //- delete
      deleteToDo(e.target)
    }

    if (e.target.tagName === 'LI') {
      // check
      checkToDo(e.target)
    }
  })
})

function addToDo(targetNode) {
  return () => {
    const inputEl = document.getElementById('input')
    const todo = createTodoData(inputEl.value)
    const liEl = createList(todo)

    targetNode.appendChild(liEl)
    updateTodoData((data) => {
      return [...data, todo]
    })
    inputEl.value = ''
  }
}

function checkToDo(liTarget) {
  const todoId = liTarget.dataset.id
  const isChecked = liTarget.classList.toggle('checked')

  updateTodoData((data) => {
    return data.map((item) => {
      if (item.id !== todoId) return item
      item.checked = isChecked
      return item
    })
  })
}

function deleteToDo(closeTarget) {
  const liEl = closeTarget.parentNode
  const todoId = liEl.dataset.id

  updateTodoData((data) => {
    return data.filter((item) => item.id !== todoId)
  })

  liEl.remove()
}

function updateTodoData(callback, shouldSave = true) {
  const nextToDoData = callback(storageState(STORAGE_KEY, []))

  if (shouldSave) {
    saveToStorage(STORAGE_KEY, nextToDoData)
  }
}

function createTodoData(content) {
  return {
    id: String(Date.now()),
    content,
    checked: false,
  }
}

function createList(todo) {
  const liEl = createToDoEl()
  const closeEl = createCloseEl()
  if (todo.checked) {
    liEl.className = 'checked'
  }

  liEl.textContent = todo.content
  liEl.dataset.id = todo.id
  liEl.appendChild(closeEl)
  return liEl
}

function createToDoEl() {
  return document.createElement('li')
}

function createCloseEl() {
  const spanEl = document.createElement('span')
  spanEl.className = 'close'
  spanEl.textContent = 'x'
  return spanEl
}

function storageState(key, initValue) {
  const todos = window.localStorage.getItem(key)
  return todos ? JSON.parse(todos) : initValue
}

function saveToStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

function initRender(data, targetNode) {
  data.forEach((item) => {
    const liEl = createList(item)
    targetNode.appendChild(liEl)
  })
}