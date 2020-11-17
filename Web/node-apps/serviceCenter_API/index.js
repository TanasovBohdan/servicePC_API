const express = require('express')
const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    res.send('me');
})

app.get('/about', (req, res) => {
    res.send('you');
})

app.listen(PORT, () => {
    console.log('Server has ben started...')
})