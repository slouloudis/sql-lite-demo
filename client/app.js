const jokeContainer = document.getElementById('joke-container')

async function getJokes() {
    // get jokes from our database. 
    const response = await fetch('http://localhost:9090/jokes')
    const jokes = await response.json()

    console.log(jokes)
    for (let joke of jokes) {
        let div = document.createElement('div')
        let pSetup = document.createElement('p')
        let pPunch = document.createElement('p')

        pSetup.textContent = joke.setup
        pPunch.textContent = joke.punchline

        div.appendChild(pSetup)
        div.appendChild(pPunch)

        jokeContainer.appendChild(div)
    }
    
}

getJokes()