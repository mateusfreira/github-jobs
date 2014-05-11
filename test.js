var jobs = require('./index.js');

jobs.find({
    term : 'Software Developer'
}, function(err, results){
    if(err){
        return console.log('Error: ', err);
    }

    console.log('Found ' + results.length + ' jobs.');

    results.forEach(function(job){
        jobs.findById(job.id, function(err, result){
            if(err){
                return console.log('Error: ', err);
            }
            console.log('Job : ', result.title);
        });
    });
});
