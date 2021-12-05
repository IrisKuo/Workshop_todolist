// TO DO
document.addEventListener('DOMContentLoaded', function () {
  let storageData = getStorage()
  storageData.forEach((data) => createItem(data))

  document.querySelector('ul').addEventListener('click', function (e) {
    let storageData = getStorage()

    if (e.target.nodeName === 'LI') {
      e.target.classList.toggle('checked')
      let id = e.target.dataset.id
      storageData.forEach((data) => {
        if (data.id == id) {
          return data.checked = !data.checked
        }
      })

      setStorage(storageData)
    }

    if (e.target.nodeName === 'SPAN') {
      let id = e.target.parentNode.dataset.id
      e.target.parentNode.remove()
      let removeItem = storageData.filter(data => data.id !== id)
      setStorage(removeItem)
    }
  })

  document.querySelector('#input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
      addItem(e.target.value)
    }
  })

  document.querySelector('#addBtn').addEventListener('click', function(){
    let content = document.querySelector("#input").value.trim()
    return addItem(content)
  })

  function addItem(content) {
    document.querySelector("#input").value = ''
    if (content.length < 1) return

    const { data } = createItem(content)
    const storage = getStorage()
    setStorage([...storage, data])
  }

  function createItem(content) {
    let li = document.createElement('li')
    let span = document.createElement('span')
    let ul = document.querySelector('ul')
    span.appendChild(document.createTextNode('x'))
    span.classList.add('close')
    li.appendChild(span)
    ul.appendChild(li)

    if (typeof content === 'string') {
      li.appendChild(document.createTextNode(content))
      li.dataset.id = Date.now()
      let data = {
        id: li.dataset.id,
        content: content,
        checked: false
      }
      return { data }
    }

    if (typeof content === 'object') {
      const { checked = false, id = false, content: text } = content
      li.appendChild(document.createTextNode(text))
      li.dataset.id = id
      checked && li.classList.add('checked')
    }
  }

  function getStorage() {
    return JSON.parse(localStorage.getItem('myLists')) || []
  }

  function setStorage(data) {
    localStorage.setItem('myLists', JSON.stringify(data))
  }
})
