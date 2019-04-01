/* jshint esversion: 6 */

const express = require('express');
const app = express();
const port = 3000;


var arr_status_app = []

var status_app = new Object();
status_app.sCode= '';
status_app.sMessage= '';
status_app.time='';
status_app.mediaHealth='';
status_app.life='';


app.get('/', (req, res) => {
  if (Math.random() > 0.25) {
    res.status.send('Magnificent!');
    res.statusCode(200);
    arr_status_app.push({sCode:res.statusCode});
    arr_status_app.push({sMessage:res.statusMessage});
    arr_status_app.push({time:new Date()})
  } else {
    res.status.send('Ooops!');
    res.statusCode(500);
    arr_status_app.push({sCode:res.statusCode});
    arr_status_app.push({sMessage:res.statusMessage});  }
}
);
module.exports = arr_status_app;
app.listen(port, () => console.log(`Magnificent listening on port ${port}!`));

