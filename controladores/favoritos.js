const { getTodosFavoritos } = require("../servicos/favoritos")
const { deletaLivroPorId } = require("../servicos/livros")

function getFavoritos(req, res) {
    try {
        const favoritos = getTodosFavoritos()
        res.send(favoritos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavoritos(req, res) {
    try {
        const id = req.params.id
        insereFavorito(id)
        res.status(201)
        res.send("Livro favoritado com sucesso")

    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavoritos(req, res) {
    try {
        const id = req.params.id
        deletaLivroPorId(id)
        res.send("Favorito deletado com sucesso")
    } catch {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = { 
    getFavoritos,
    postFavoritos,
    deleteFavoritos
}