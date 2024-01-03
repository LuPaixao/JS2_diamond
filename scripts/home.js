window.onload = () => {
    displayUserData();
}

function displayUserData(){

    const user = localStorage.getItem('data');

    const data = JSON.parse(user);

    const imageElement = document.getElementById('image');
    const nameElement = document.getElementById('name');
    const lastElement = document.getElementById('lastName');
    

    imageElement.src = data.image || '';
    nameElement.innerText = data.firstName;
    lastElement.innerText = data.lastName;
}

