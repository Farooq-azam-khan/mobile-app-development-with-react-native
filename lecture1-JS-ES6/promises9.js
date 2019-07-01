const url = '';
fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (json) {
        return ({
            data: json.data
        })
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err) {
        // handle error
        console.log(err);
    }); 