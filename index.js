let counter = 0

// ! Create card with user inputs
document.querySelector('#record-btn').addEventListener('click', () => {
    let userDate = document.querySelector('#input-date').value;
    let userTitle = document.querySelector('#input-title').value;
    let userContent = document.querySelector('#input-content').value;
    let cardContainer = document.querySelector('.card-container');
    let createCard = document.createElement('div');
    createCard.className = 'card';

    createCard.innerHTML = `
    <div class="card-body">
        <h6 class="card-date">${userDate}</h6>
        <h5 class="card-title">${userTitle}</h5>
        <p class="card-text">${userContent}</p>
        <div class="joke-container" id="joke-container-${counter}">
            <a href="#" class="btn btn-primary joke-btn">Joke Of The Day</a>

        </div>
    </div>`

    cardContainer.appendChild(createCard);
    const arrButtons = document.querySelectorAll('.joke-btn');
    const btnsArr = Array.from(arrButtons);
    console.log(btnsArr);
    console.log(btnsArr[counter]);
    
    
        btnsArr[counter].addEventListener('click', async () => {
        const eventListenerCounter = counter;
        console.log(counter)
        const serverResponse = await getJoke();
        const responseSetup = serverResponse.setup;
        const responseDelivery = serverResponse.delivery;
        const jokeContainer = document.querySelector(`#joke-container-${eventListenerCounter}`);
        console.log(jokeContainer)

        let createJokeBox = document.createElement("div");
        createJokeBox.className = 'joke-content';
        
        createJokeBox.innerHTML = `
        <p><em> "${responseSetup}" </em></p>
        <p><em> "${responseDelivery}" </em></p>
        `
        
        jokeContainer.appendChild(createJokeBox);
    })
    counter++;
});
// array push 


//one more function 'render'



// ! Let the 'Joke Of The Day' button brings random data from API and display in the card.
async function getJoke() {
    const response = await fetch('https://v2.jokeapi.dev/joke/Miscellaneous,Dark,Pun,Spooky,Christmas?type=twopart')
    const data = await response.json();
    console.log(data);
    return data;
}

// const arrButtons = document.querySelectorAll('.joke-btn');
// console.log(arrButtons);

// arrButtons.forEach((item, i) => {
//     item.addEventListener('click', async () => {
//         const serverResponse = await getJoke();
//         const responseSetup = serverResponse.setup;
//         const responseDelivery = serverResponse.delivery;
//         const jokeContainer = document.querySelector(`#joke-container-${i}`);
//         console.log(counter)
//         console.log(jokeContainer)

//         let createJokeBox = document.createElement("div");
//         createJokeBox.className = 'joke-content';
    
//         createJokeBox.innerHTML = `
//         <p><em> "${responseSetup}" </em></p>
//         <p><em> "${responseDelivery}" </em></p>
//         `
    


//         jokeContainer.appendChild(createJokeBox);
//     })
    
// })

// document.querySelector('.joke-btn').addEventListener('click', async () => {
//     const serverResponse = await getJoke();
//     const responseSetup = serverResponse.setup;
//     const responseDelivery = serverResponse.delivery;
//     const jokeContainer = document.querySelector('.joke-container');

//     let createJokeBox = document.createElement("div");
//     createJokeBox.className = 'joke-content';

//     createJokeBox.innerHTML = `
//     <p><em> "${responseSetup}" </em></p>
//     <p><em> "${responseDelivery}" </em></p>
//     `

//     jokeContainer.appendChild(createJokeBox);
// })
    

// increment on joke id