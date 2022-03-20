

let usersContainer = document.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const useritem of value) {
            let userContainer = document.createElement('div');
            userContainer.classList.add('user');
            let content = document.createElement('a');
            content.innerText = `${useritem.id}-${useritem.name}`;
            content.href = `./user-details.html?data=${JSON.stringify(useritem)}`
            userContainer.append(content);
            usersContainer.appendChild(userContainer);
        }
    })