/*Deliverables:
1.Make a package.json file 
Done
2.Add a npm start and start-server script
Done
3.Install the nodemon package. What problem does nodemon solve?
Not did since my PC allowing discussed in class too.
nodemon package is similar to 'open live server' option in vs. it alllows us auto run our code whenever our code saved.
4.When would you use --save-dev and --save? --save to run in prod and --save-dev to run in development
5.Make your application restart whenever u save by following the youtuber.*/

const http = require('http')
const routes = require('./routes')
const server = http.createServer(routes);
server.listen(4000)