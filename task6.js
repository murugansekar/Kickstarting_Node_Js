/*
1.Explain how does the internet work in your own words.
A user\client from browser enters some URL and the the browsers reaches out to main name servers and domain lookup happens. After this browser or domain lookup send requests to the server or address belonging to that server which in turn return an response back in term of html. Both request and response have headers to describe the meta information. HTTP and HTTPS are used for data transmission.  

2.What are the core modules of node js? 
http
https
fs
path
os

3.Explain the use of each one of them in detail.
http helps in creating server when we work on http request and responses
https helps in creating SSL encoded server when we work on https request and responses
fs used for read, write, append and modify file content 
path helps in constructing paths to files or file system
os helps us with operation system related information

4.What are relative path and absolute path? How to define them?
relative path : ./ and absolute path : /

5.What does createServer do?
It creates server and it has two paramenters req and res

6.What are anonymous functions?
A function that has no name or we can say which is without any name
   
7.What do you think server.listens exactly do?Why do we need it?
server.listens now actually starts a process and Node Js will not immediately access our script but Node Js will instead keeps it running to listen. It takes optional arguments and first one is port on which it wants to listen
*/

/*Create a server , run it on port 4000 and console log your name.
Call the server from the browser and your name would get printed.*/
const http = require('http')
const server = http.createServer((req,res) => console.log("Murugan"))
server.listen(4000)