const express = require('express'); // common js modules

// import is es 2015 syntax not available in node

const app = express();

app.get('/', (req, res) => {
    // console.log(res)
    // console.log(req)
    res.send({message:"sanju, I love you!"})
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
