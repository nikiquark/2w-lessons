const express = require('express')
const app = express()
const port = 3000

app.get('/plus', (req, res) => {
    const x = Number(req.query.x);
    // Add y
    res.send({result: x + 5});
})

// add minus, mult, div

app.listen(port, () => console.log(`Example app listening on port ${port}!`))