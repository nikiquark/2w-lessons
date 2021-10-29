const express = require('express')
const app = express()
const port = 3000

const items = ["Pop-it", "Cheese", "Simple Dimple"]

app.get('/item', (request, response) =>{ 
    const _items_id = request.query.items_id
    if (_items_id) {
        const items_id = JSON.parse(_items_id)
        result = ""
        for (let i in items_id){
            //console.log(items_id[i])
            result+= items[items_id[i]] + "<br>"
        }
        response.send(result)
    }
    else
        response.send(items)
})

app.get('/cube', (req, res) => {
    res.send("<img width=50 src='https://static.detmir.st/media_out/901/885/2885901/1500/0.jpg?1556155824518'>")
})



app.listen(port, () => console.log(`Example app is started!`))