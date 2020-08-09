var list = document.getElementById("todoList");


function todoApp(){
    var todo = document.getElementById("todoApp");
    var li = document.createElement('li')
    var liText = document.createTextNode(todo.value)

    li.appendChild(liText)

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute("class","button")
    editBtn.setAttribute("onclick","editItem(this)")
    editBtn.appendChild(editText)

    var delBtn = document.createElement("button")
    var  delText = document.createTextNode("Delete")
    delBtn.setAttribute("class","button")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)


    
    
    li.appendChild(editBtn)
    li.appendChild(delBtn)


    list.appendChild(li)

    todo.value = ""

}

function deleteItem(e){
    e.parentNode.remove()

}

function editItem(e){
        var value = prompt("Enter Edit Value",e.parentNode.firstChild.nodeValue)
        e.parentNode.firstChild.nodeValue = value;
}

function deleteAll(){
    list.innerHTML =""
}