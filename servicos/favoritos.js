const fs = require("fs")

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync("favorito.json"))
}

function deletaFavoritoPorId(id) {
    const favoritos = JSON.parse(fs.readFileSync("favorito.json"))

    const favoritosFiltrados = favoritos.filter( favorito => favorito.id !== id )
    fs.writeFileSync("favoritos.json", JSON.stringify(favoritosFiltrados))
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const favoritos = JSON.parse(fs.readFileSync("favorito.json"))

    const livroInserido = livros.find( livro => livro.id === id )
    const novaListaDeFavoritos = [ ...favoritos, livroInserido ] 

    fs.writeFileSync("favoritos.json", JSON.stringify(novaListaDeFavoritos))
}

module.export = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito,
}