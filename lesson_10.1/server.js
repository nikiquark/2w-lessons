const ItemController = require('./controller.js');
var cors = require('cors')
const express = require('express');
const app = express();
const port = 3000; 

// Включаем доступ всем пользователям интернета
app.use(cors())
// добавляем документацию на /api/docs
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');
app.use(
    '/api/docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);

function AdminGuard(req, res, next){
    if (req.query.key == '1233')
        next();
    else
        res.json({result: "Доступ запрещён"})
}


app.use(express.static(__dirname + '/static'));
app.use(express.json())

app.get('/api/items', ItemController.get_items);
app.post('/api/items', ItemController.add_item);
app.get('/api/items/:item_id', ItemController.get_item) // Информация об одном предмете по item_id
app.delete('/api/items/:item_id', ItemController.delete_item)
app.patch('/api/items/:item_id', ItemController.patch_item)

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// ПЕРЕД ЗАПУСКОМ НУЖНО ДОУСТАНОВИТЬ БИБЛИОТЕКИ
//   npm install
//   node server.js
// localhost:3000/ - Сайт
// localhost:3000/api/docs - документация
