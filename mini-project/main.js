let container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);


fetch ('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name}`;
            div.classList.add('user-block');
            let btn = document.createElement('div');
            btn.classList.add('btn')
            let a = document.createElement('a');
            a.innerText = `About`;
            a.href = `user-details.html?id=${user.id}`;
            btn.appendChild(a);
            div.appendChild(btn);
            container.appendChild(div);

        }
        }
    )