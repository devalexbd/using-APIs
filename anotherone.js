async function grabInfo(){
    const response = await fetch('https://randomuser.me/api/')

    let someThing = await response.json()

    console.log(someThing.results[0].location.city)
}

grabInfo()