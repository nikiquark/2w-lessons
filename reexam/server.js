const express = require('express')
const app = express()
const port = 3000

// добавляем документацию на /api/docs
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
app.use(
    '/api/docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);

app.use(express.static(__dirname + '/static'))
app.use(express.json());
twits = [
    {
        author_id: 0,
        id: 123213,
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error commodi, dolore sint fuga ullam beatae sunt, minima non impedit nihil ab nam. Incidunt, labore! Ullam natus corporis aspernatur voluptates minus!"
    }
]

authors = [
    {
        id: 0,
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


// Тут код


app.listen(port, () => console.log(`Example app listening on port ${port}!`))