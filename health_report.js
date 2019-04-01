const express = require('express');
const app_ = express();
const port = 3001;

var arr_status_app = require('./index');

const fs = require('fs');
var sCode='';

app_.get('/', (req, res) => {

    var status_json = JSON.stringify(arr_status_app);
    res.send(status_json);    
    fs.writeFile('./test.log', status_json, (err) => {
        if (err) throw err;
        console.log('The file was written!!');
      });
    
});



app_.listen(port, () => console.log(`Health report listening on port ${port}!`));

