var md = {}

md.handleDataWithStatus = function(options) {
    var {callback, err, data, type} = options;
    var o = {data:null, msg: 'SUCCESS', status: 0}
    if(err){
        o.status = 1;
        o.msg = err.msg;
        callback(o)
        return;
    }
    o.data = data  
    callback(o)
}

module.exports = md