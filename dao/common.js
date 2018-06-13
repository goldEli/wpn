var md = {}

md.handleDataWithStatus = function(options) {
    var {callback, err, data,s} = options;
    var o = {data:null, msg: 'SUCCESS', status: 0}
    console.log('sql:',s)
    if(err){
        console.log('sql_error',err)
        o.status = 1;
        o.msg = err.msg;
        callback(o)
        return;
    }
    o.data = data  
    callback(o)
}

module.exports = md