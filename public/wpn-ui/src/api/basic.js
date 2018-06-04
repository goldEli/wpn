const urls = {
    users: '/users',
    addUser: '/users/add',
    delUser: '/users/del',
    login: '/users/login',
}

const handleFetch = function(options){
    const {url, success, param} = options
    fetch(url, {
        body: JSON.stringify(param || {}), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
        credentials: "include", // with cookie
      })
        .then(res => {
          if (res.status === 200) {
            return res.text(); 
          } else {
              console.error(res.status + ":" + res.statusText)
          }
        })
        .then(res => {
            if (success) {
                success(res)
            }
        });
}

const md = (function() {
    const o = {}
    for (let key in urls) {
        const url = urls[key];
        o[key] = function(options) {
            handleFetch({...options,url})
        }
    }
    return o;
})()

export default md;