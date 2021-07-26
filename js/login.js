const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    let data = {
        nome, 
        email,
        senha
    }
   
    let convertData = JSON.stringify(data);

    localStorage.setItem('cadastro', convertData);
    console.log(convertData)
   
    let content = document.getElementById('cadastro');
    let cadastrando = `<p>Aguarde cadastrando e-mail...</p>`;
    let cadastrado  = `<p> ${nome}, o seu e-mail ${email}, foi cadastrado com sucesso!</p>`;

    content.innerHTML = cadastrando;

    setTimeout(() => {
    content.innerHTML = cadastrado;

        setTimeout(() =>{
            window.location = '/ecomerce.html';

        }, 1000);

    }, 1000);
} );