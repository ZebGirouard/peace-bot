const express = require('express')

const app = express()

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => res.send('Peace Bot - Cuz We Could Use a Little More Peace in the World'))

app.listen(PORT, () => console.log('lets get peaceful'))
