
const getMovies = () =>
  fetch('/api/movies', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

const saveMovie = (movie) =>
  fetch('/api/movies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie),
  });

const deleteMovie = (id) =>
  fetch(`/api/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });



// let movieTitle;
// let movieText;
// let savemovieBtn;
// let newmovieBtn;
// let movieList;

// if (window.location.pathname === '/movies') {
//   movieTitle = document.querySelector('.movie-title');
//   movieText = document.querySelector('.movie-textarea');
//   savemovieBtn = document.querySelector('.save-movie');
//   newmovieBtn = document.querySelector('.new-movie');
//   movieList = document.querySelectorAll('.list-container .list-group');
// }

// // Show an element
// const show = (elem) => {
//   elem.style.display = 'inline';
// };

// // Hide an element
// const hide = (elem) => {
//   elem.style.display = 'none';
// };

// // activemovie is used to keep track of the movie in the textarea
// let activemovie = {};

// const renderActivemovie = () => {
//   hide(savemovieBtn);

//   if (activemovie.id) {
//     movieTitle.setAttribute('readonly', true);
//     movieText.setAttribute('readonly', true);
//     movieTitle.value = activemovie.title;
//     movieText.value = activemovie.text;
//   } else {
//     movieTitle.removeAttribute('readonly');
//     movieText.removeAttribute('readonly');
//     movieTitle.value = '';
//     movieText.value = '';
//   }
// };

const handlemovieSave = () => {
  const newmovie = {
    title: movieTitle.value,
    text: movieText.value,
  };
  savemovie(newmovie).then(() => {
    getAndRendermovies();
    renderActivemovie();
  });
};

// Delete the clicked movie
// const handlemovieDelete = (e) => {
//   // Prevents the click listener for the list from being called when the button inside of it is clicked
//   e.stopPropagation();

//   const movie = e.target;
//   const movieId = JSON.parse(movie.parentElement.getAttribute('data-movie')).id;

//   if (activemovie.id === movieId) {
//     activemovie = {};
//   }

//   deletemovie(movieId).then(() => {
//     getAndRendermovies();
//     renderActivemovie();
//   });
// };

// Sets the activemovie and displays it
// const handlemovieView = (e) => {
//   e.preventDefault();
//   activemovie = JSON.parse(e.target.parentElement.getAttribute('data-movie'));
//   renderActivemovie();
// };

// // Sets the activemovie to and empty object and allows the user to enter a new movie
// const handleNewmovieView = (e) => {
//   activemovie = {};
//   renderActivemovie();
// };

// const handleRenderSaveBtn = () => {
//   if (!movieTitle.value.trim() || !movieText.value.trim()) {
//     hide(savemovieBtn);
//   } else {
//     show(savemovieBtn);
//   }
// };

// Render the list of movie titles
const renderMovieList = async (movies) => {
  let jsonmovies = await movies.json();
  if (window.location.pathname === '/movies') {
    movieList.forEach((el) => (el.innerHTML = ''));
  }

  let movieListItems = [];

  // // Returns HTML element with or without a delete button
  // const createLi = (text, delBtn = true) => {
  //   const liEl = document.createElement('li');
  //   liEl.classList.add('list-group-item');

  //   const spanEl = document.createElement('span');
  //   spanEl.classList.add('list-item-title');
  //   spanEl.innerText = text;
  //   spanEl.addEventListener('click', handlemovieView);

  //   liEl.append(spanEl);

  //   if (delBtn) {
  //     const delBtnEl = document.createElement('i');
  //     delBtnEl.classList.add(
  //       'fas',
  //       'fa-trash-alt',
  //       'float-right',
  //       'text-danger',
  //       'delete-movie'
  //     );
  //     delBtnEl.addEventListener('click', handlemovieDelete);

  //     liEl.append(delBtnEl);
  //   }

  //   return liEl;
  // };




  if (jsonmovies.length === 0) {
    movieListItems.push(createLi('No saved movies', false));
  }

  jsonmovies.forEach((movie) => {
    const li = createLi(movie.title);
    li.dataset.movie = JSON.stringify(movie);

    movieListItems.push(li);
  });




  if (window.location.pathname === '/movies') {
    movieListItems.forEach((movie) => movieList[0].append(movie));
  }
};




// Gets movies from the db and renders them to the sidebar
const getAndRenderMovies = () => getmovies().then(renderMovieList);

// if (window.location.pathname === '/movies') {
//   savemovieBtn.addEventListener('click', handlemovieSave);
//   newmovieBtn.addEventListener('click', handleNewmovieView);
//   movieTitle.addEventListener('keyup', handleRenderSaveBtn);
//   movieText.addEventListener('keyup', handleRenderSaveBtn);
// }

// getAndRenderMovies();
