window.onload = () => {
    displayUserData();
}

function displayUserData(){

    const user = localStorage.getItem('data');

    const data = JSON.parse(user);

    const imageElement = document.getElementById('image');
    const nameElement = document.getElementById('name');
    const lastElement = document.getElementById('lastName');
    const idElement = document.getElementById('id');
    const fullNameElement = document.getElementById('fullName');
    const genderElement = document.getElementById('gender');
    const hairElement = document.getElementById('hair');
    const eyesElement = document.getElementById('eyes');

    imageElement.src = data.image;
    nameElement.innerText = data.firstName;
    lastElement.innerText = data.lastName;
    idElement.innerText = 'ID: ' + data.id;
    fullNameElement.innerText = `${data.firstName} ${data.lastName}`;
    genderElement.innerText = 'SEX: '+ data.gender;
    hairElement.innerText = data.hair?.type ||'';
    eyesElement.innerText = data.eyesColor  || '';

}

