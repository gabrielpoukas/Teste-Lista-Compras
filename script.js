const ul = document.querySelector('ul');

function addItem(itemName, itemQuantity = 1) {
    const li = document.createElement('li');

    const itemText = document.createElement('span');
    itemText.textContent = `${itemQuantity}x ${itemName}`;
    li.appendChild(itemText);

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.style.marginLeft = '10px';
    editButton.addEventListener('click', () => editItem(li, itemText));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Deletar';
    deleteButton.style.marginLeft = '10px';
    deleteButton.addEventListener('click', () => deleteItem(li));

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    ul.appendChild(li);
}

function editItem(li, itemText) {
    const currentText = itemText.textContent;
    const [currentQuantity, ...currentNameParts] = currentText.split(' ');
    const currentName = currentNameParts.join(' ').replace('x', '').trim();

    const newName = prompt('Digite o novo nome do item:', currentName);
    const newQuantity = prompt('Digite a nova quantidade:', currentQuantity.replace('x', '').trim());

    if (newName && newQuantity) {
        itemText.textContent = `${newQuantity}x ${newName}`;
    }
}

function deleteItem(li) {
    ul.removeChild(li);
}

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.createElement('button');
    addButton.textContent = 'Adicionar Item';
    addButton.style.display = 'block';
    addButton.style.margin = '20px auto';
    addButton.addEventListener('click', () => {
        const itemName = prompt('Digite o nome do item:');
        const itemQuantity = prompt('Digite a quantidade do item:', '1');
        if (itemName && itemQuantity) {
            addItem(itemName, itemQuantity);
        }
    });

    document.body.insertBefore(addButton, ul);
});