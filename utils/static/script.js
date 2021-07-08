const getValue = () => {
    if(document.getElementById("textvalue").value) {
        const inputValue = document.getElementById("textvalue").value;
        const itemTextNode = document.createTextNode(inputValue);
        document.getElementById('textvalue').value = ''
        const list = document.getElementById('items');
        const newItem = document.createElement('li');
        newItem.className = "list-group-item";
        newItem.setAttribute('id', 'listItem')
        newItem.appendChild(itemTextNode);
        list.appendChild(newItem)
    }
}

function resetValue(){
    const myList = document.getElementById('items');
    myList.innerHTML = '';
}

document.querySelector('.btn-dark').addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

