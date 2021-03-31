fetch('https://myexample.com', {
    method: 'POST',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body: 'foo=bar&blah=1'
})
.then(response => response.json())