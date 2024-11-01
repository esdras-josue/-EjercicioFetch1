const userList = document.getElementById('userList');

async function fetchUsers(){
    try{
        const response = await fetch('https://api.escuelajs.co/api/v1/users');
        const users = await response.json();

        renderUsers(users);
    } catch (error){
        console.error('Error al obtener los usuarios:',error);
    }
}

function renderUsers(users){

    userList.innerHTML = '';

    users.forEach(user => {
        const userCard = `
        <div class="col-md-4">
            <div class="card">
                <img src="${user.avatar}" class="card-img" alt="${user.name}">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">
                        <strong>Email:</strong> ${user.email} <br>
                        <strong>Password:</strong> ${user.password}
                    </p>
                </div>
            </div>

        `;
        userList.innerHTML += userCard;

    });
}   

fetchUsers();