/*Deliverables:
1.Did you understand event loop ? Please explain it in your words if you did. If you didnt please raise a question in next class.
The event loop is run or started by by nodejs that keeps that nodejs process running and handles all callbacks and it has a certain order in which it goes through the callbacks like timers, pending callbacks, poll, check, close callbacks. Long taking operations like fs is not handled by event loop. Basically the event loop will only handle callback that contain fast finishing code. Instead our fs and other long taking operations are sent to worker pool which is also spun up and managed by Node Js automatically. This worker pool is responsible for all the heavy lifting and runs on different threads and has no connection with code. It has one connection with event loop that is once the work is done, so for example once read a file, it will trigger the callback for that read.

2.Now clean up the code like the way the youtuber did in video 38. Push the code to git and upload the commit ID.*/

const http = require('http')
const routes = require('./routes')
const server = http.createServer(routes);
server.listen(4000)