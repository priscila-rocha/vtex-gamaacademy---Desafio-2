

function adicionarCarrinho(e) {
    let storage = localStorage.getItem('carrinho');
    let livros = [];
    if (storage != null) {
        livros = storage.split(',');
    }
    livros.push(e.parentElement.id)
    console.log(livros);
    localStorage.setItem('carrinho', livros);
    // console.log(e.parentElement.id)
}

