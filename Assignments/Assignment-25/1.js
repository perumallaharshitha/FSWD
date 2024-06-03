// Getting API data in tabular form
async function getTodos1(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await response.json();

    let tableBody = document.querySelector('#table-body');

    data.forEach((todo, index) => {
        let row = document.createElement('tr');
        let indexCell = document.createElement('td');
        indexCell.textContent = index;
        row.appendChild(indexCell);
        let userIdCell = document.createElement('td');
        userIdCell.textContent = todo.userId;
        row.appendChild(userIdCell);
        let idCell = document.createElement('td');
        idCell.textContent = todo.id;
        row.appendChild(idCell);
        let titleCell = document.createElement('td');
        titleCell.textContent = todo.title;
        row.appendChild(titleCell);
        let completedCell = document.createElement('td');
        completedCell.textContent = todo.completed;
        row.appendChild(completedCell);
        // Append the row to the table body
        tableBody.appendChild(row);
    });
    console.table(data)
}
getTodos1();


// Getting API data in grid form
async function getTodos2() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await response.json();

    let gridContainer = document.querySelector('#grid-container');

    data.forEach((todo, index) => {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        let indexElement = document.createElement('span');
        indexElement.textContent = `Index: ${index}`;
        gridItem.appendChild(indexElement);
        let userIdElement = document.createElement('span');
        userIdElement.textContent = `UserId: ${todo.userId}`;
        gridItem.appendChild(userIdElement);
        let idElement = document.createElement('span');
        idElement.textContent = `Id: ${todo.id}`;
        gridItem.appendChild(idElement);
        let titleElement = document.createElement('span');
        titleElement.textContent = `Title: ${todo.title}`;
        gridItem.appendChild(titleElement);
        let completedElement = document.createElement('span');
        completedElement.textContent = `Completed: ${todo.completed}`;
        gridItem.appendChild(completedElement);
        // Append the grid item to the grid container
        gridContainer.appendChild(gridItem);
    });
}

getTodos2();


