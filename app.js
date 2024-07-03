
async function apimorty(){
    let api = 'https://rickandmortyapi.com/api/character'
    try {
        const response = await fetch(api)
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const json = await response.json()
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}

apimorty()