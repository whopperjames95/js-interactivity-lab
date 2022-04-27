// const inputField = document.querySelector("input");

// const movie = document.createElement('li')

// const movieTitle = document.createElement('span');
// movieTitle.textContent = inputField;


// function addmovie(event)






// document.querySelector("form").addEventListener("submit", addMovie);
// const message = document.querySelector('#message')

// function addMovie(event) {
//   event.preventDefault();
//   let inputField = document.querySelector('input')

//   const movie = document.createElement('li')

//   const movieTitle = document.createElement("span");
//   movieTitle.textContent = inputField.value;
//   movieTitle.addEventListener("click", crossOffMovie);
//   movie.appendChild(movieTitle)

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "x";
//   deleteBtn.addEventListener("click", deleteMovie);
//   movie.appendChild(deleteBtn);

//   const list = document.querySelector("ul");
//   list.appendChild(movie);

//   inputField.value = ''
// }


const message = document.querySelector('#message');


function addMovie(event) {
    event.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    const list = document.querySelector('ul');


    movieTitle.textContent = inputField.value;
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x'
    list.appendChild(movie);
    movie.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', deleteMovie);

    movieTitle.addEventListener('click', crossOffMovie);

}

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = 'Movie Deleted!'
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked');
    if(event.target.classList.contains('checked')){
        message.textContent = "movie watched"
    } else {
        message.textContent = "Movie added"
    }
}



const form = document.querySelector('form');
form.addEventListener('submit', addMovie);

























