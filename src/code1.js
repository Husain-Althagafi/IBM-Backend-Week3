const express = require('express')
const app = express()
const port = 3000


app.get('/temperature/:location_code', function(request, response){
    let location = request.params.location_code
})