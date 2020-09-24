fetch('http://api.icndb.com/jokes/random/50')
    .then(response => response.json())
    .then(data => {console.log(data) });


// async await

async function getJokes() {
    let response = await fetch('http://api.icndb.com/jokes/random/5000');
    console.log(response);
    let data = await response.json();
    return data;
}


getJokes().then(jokes => console.log(jokes));