const express = require ('express');
const app = express();

app.get('/',(res, req)=>{
    res.json({
        msg:'hello backend'
    })
})

app.listen(4000)