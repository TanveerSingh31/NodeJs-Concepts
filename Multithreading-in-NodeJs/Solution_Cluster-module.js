const cluster = require('cluster');
const os = require('os');
const express = require('express');

const noOfCPU = os.cpus().length;


// NOTE
// Only primary process can fork workers
// Primary Process doesnot serve any request , instead act as load-balancer and redirects req's to workers

if(cluster.isPrimary){

    // We can create multiple worker, but max we can create is the no. cpu cores in m/c
    for(let i=0; i<noOfCPU; i++){
        // creates new worker
        cluster.fork();
    }

}
else {
    const app = express();

    app.get('/', (req, res, next)=>{
        res.send({'data': 'from a fast API'});
    });
    
    // CPU intensive API
    app.get('/slow-route', (req, res, next)=>{
        for(let i=0; i<100000000000; i++){}
        res.send({'response from slow route': 1});
    });

    app.listen(7200, ()=> console.log('server started on 5500'));
}



// We can access '/' route afterwards accessing the 'slow-route' API, and we get the result instantly
// Because, 1 worker is serving the 'slow-route', and 
// any incoming request will now be redirected by master node process to free worker process

// Hence, we can scale our nodejs application