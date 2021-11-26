const express = require('express')
const app = express()
const port = 3000

// Add Swagger documentation to /api-docs
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);

// Подготавливаем массив предметов
let items = [
    {
        "id": 123,
        "name": "Диван",
        "price": 1000,
        "description": "Мягкий серый диван"
    },
    {
        "id": 1321,
        "name": "Кресло",
        "price": 2000,
        "description": "Уютное кресло, в котором удобно сидеть"
    },
    {
        "id": 232,
        "name": "Стол",
        "price": 3000,
        "description": "Удобный стол для программирования"
    }
]

// Некоторые полезные функции

// Переводит случайный id в номер в массиве
function item_id_to_id(item_id){
    return items.findIndex((element, index, array) => {
        return (element.id == item_id);
    })
}

// Герерирует случайный id
function random_id(){
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
}


app.use(express.json())

app.get('/items', (req, res)=>{
    // TODO
    res.json({"result": "Success"});
})
app.post('/items', (req, res)=>{
    const item = req.body.item;
    // TODO
    res.json({"result": "Success"});
})
app.get('/items/:item_id', (req, res)=>{
    const item_id = Number(req.params.item_id);
    // TODO
    res.json({"result": "Success"});
});
app.delete('/items/:item_id', (req, res)=>{
    // TODO
    res.json({"result": "Success"});
})
app.patch('/items/:item_id', (req, res)=>{
    // TODO
    res.json({"result": "Success"});
})


app.get('/', (req, res) => res.send('Документация на /api-docs'))
// Запускаем наше приложение/ сервер
app.listen(port, () => console.log(`localhost:${port}`))