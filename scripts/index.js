async function usuarioLogin(){
    event.preventDefault();
    try{
        let response = await fetch ("https://dummyjson.com/auth/login", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            })
        });

        if(!response.ok){
            throw new Error('Erro ao fazer login. Verifique os dados informados');
        }

        const data = await response.json();
        const newData = {
        id: data.id,
        }
        const token = data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('data', JSON.stringify(newData));
        alert('Seja bem vindo, ' + username.value);

        window.location.href = 'home.html';
        } catch (error) {
        alert(error.message);
        }


}

let username = document.getElementById("username")
let password = document.getElementById("password")




