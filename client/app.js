const jokeContainer = document.getElementById('joke-container')
const jokeForm = document.getElementById('joke-form')


jokeForm.addEventListener('submit', async function (event) {
    event.preventDefault()

    // get the data from the form. 
    const formData = new FormData(jokeForm)
    console.log(formData, ' form data')
    const formValues = Object.fromEntries(formData)
    console.log(formValues, ' form Values')
    
    const response = await fetch("http://localhost:9090/jokes", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues)
    });
    const json = await response.json()
    getJokes()
})



async function getJokes() {
    jokeContainer.innerHTML = ''
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