const express = require('express')
const app = express()
const port = 3000


app.use(express.static(__dirname + '/static'))
app.use(express.json());
twits = [
    {
        author_id: 123,
        id: 123213,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error commodi, dolore sint fuga ullam beatae sunt, minima non impedit nihil ab nam. Incidunt, labore! Ullam natus corporis aspernatur voluptates minus!"
    }
]
// const twit = req.body.twit; // {author_id: 123, text: "123123"};
// const author = req.body.author; // {name: "Nikita", author_img: "..."}
authors = [
    {
        id: 123,
        name: "Nikita Okhotnikov",
        author_img: "https://cpp-python-nsu.inp.nsk.su/media/pictures/nikita_crop.jpeg"
    }
]

// Переводит случайный id в номер в массиве
function rand_id_to_id(array, rand_id){
    return array.findIndex((element, index, array) => {
        return (element.id == rand_id);
    })
}

// Герерирует случайный id
function random_id(){
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))