
let username = document.getElementById("username");
let password = document.getElementById("password");

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
        const token = data.token;
        const decodedToken = decodeJWT(token);
        const newData = decodedToken['payload'];

        localStorage.setItem('token', token);
        localStorage.setItem('data', JSON.stringify(newData));
        alert('Seja bem vindo, ' + username.value);

        window.location.href = 'home.html';
        } catch (error) {
        alert(error.message);
        }
}

function decodeJWT(jwt) {
    const [header, payload] = jwt.split('.').slice(0,2)
      .map(el => el.replace(/-/g, '+').replace(/_/g, '/'))
      .map(el => JSON.parse(window.atob(el)));
    return {header, payload};
}


  




