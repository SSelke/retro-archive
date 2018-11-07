if(process.env.NODE_ENV === 'production') {
    //in production
    console.log("In Prod"); 
    module.exports = require('./prod');
} else {
    //in development
    module.exports = require('./dev');
}