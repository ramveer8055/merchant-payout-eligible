const express = require('express')
const app = express()

const PORT = 4242

const merchantCtrl = require('./controllers/merchantController')

app.get('/', (req, res) => {
    res.status(200).json({
        message: "success"
    })
})

app.get('/one-to-many', merchantCtrl.oneToMany)
app.get('/payout', merchantCtrl.payOut)


app.listen(PORT, () => {
    console.log(`port is listening on http://localhost:${PORT}`)
})