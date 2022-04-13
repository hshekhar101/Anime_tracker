// SideBar Toggle
const toggleBtn = document.getElementById("bars").onclick = function(){
  let subHeader = document.getElementById("sub-header");
  subHeader.classList.toggle("hide");
  console.log(subHeader);
}

const API_key = "api_key=5d04012bc4d5ad4443c7e8a9c0b416ac";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const searchURL = BASE_URL + '/search/movie?' + API_key;

const popular1 = BASE_URL + "/discover/movie?sort_by=popularity.des&page=1&" + API_key;
const popular2 = BASE_URL + "/discover/movie?sort_by=popularity.des&page=2&" + API_key;
const topRated = BASE_URL + "/discover/movie/?sort_by=vote_average.desc&" + API_key;
const upcoming = BASE_URL + "/discover/movie?primary_release_date.gte=2022-02-10&primary_release_date.lte=2022-03-31&" + API_key;
// const anime = "https://api.jikan.moe/v4/anime?q=&sfw";
// const tv_shows = BASE_URL + "/discover/movie?with_genres=10770&" + API_key;
// const webseries =BASE_URL + "/discover/movie?sort_by=popularity.des&" + API_key;


const Action1 = BASE_URL + "/discover/movie?with_genres=28&page=1&" + API_key;
const Action2 = BASE_URL + "/discover/movie?with_genres=28&page=2&" + API_key;
const Action3 = BASE_URL + "/discover/movie?with_genres=28&page=3&" + API_key;
const Adventure1 = BASE_URL + "/discover/movie?with_genres=12&page=1&" + API_key;
const Adventure2 = BASE_URL + "/discover/movie?with_genres=12&page=2&" + API_key;
const Adventure3 = BASE_URL + "/discover/movie?with_genres=12&page=3&" + API_key;
const Comedy1 = BASE_URL + "/discover/movie?with_genres=35&page=1&" + API_key;
const Comedy2 = BASE_URL + "/discover/movie?with_genres=35&page=2&" + API_key;
const Comedy3 = BASE_URL + "/discover/movie?with_genres=35&page=3&" + API_key;
const Crime1 = BASE_URL + "/discover/movie?with_genres=80&page=1&" + API_key;
const Crime2 = BASE_URL + "/discover/movie?with_genres=80&page=2&" + API_key;
const Crime3 = BASE_URL + "/discover/movie?with_genres=80&page=3&" + API_key;
const Drama1 = BASE_URL + "/discover/movie?with_genres=18&page=1&" + API_key;
const Drama2 = BASE_URL + "/discover/movie?with_genres=18&page=2&" + API_key;
const Drama3 = BASE_URL + "/discover/movie?with_genres=18&page=3&" + API_key;
const Family1 = BASE_URL + "/discover/movie?with_genres=14&page=1&" + API_key;
const Family2 = BASE_URL + "/discover/movie?with_genres=14&page=2&" + API_key;
const Family3 = BASE_URL + "/discover/movie?with_genres=14&page=3&" + API_key;
const Documentary1 = BASE_URL + "/discover/movie?with_genres=99&page=1&" + API_key;
const Documentary2 = BASE_URL + "/discover/movie?with_genres=99&page=2&" + API_key;
const Documentary3 = BASE_URL + "/discover/movie?with_genres=99&page=3&" + API_key;
const Horror1 = BASE_URL + "/discover/movie?with_genres=27&page=1&" + API_key;
const Horror2 = BASE_URL + "/discover/movie?with_genres=27&page=2&" + API_key;
const Horror3 = BASE_URL + "/discover/movie?with_genres=27&page=3&" + API_key;
const Sci1 = BASE_URL + "/discover/movie?with_genres=878&page=1&" + API_key;
const Sci2 = BASE_URL + "/discover/movie?with_genres=878&page=2&" + API_key;
const Sci3 = BASE_URL + "/discover/movie?with_genres=878&page=3&" + API_key;
const Romance1 = BASE_URL + "/discover/movie?with_genres=10749&page=1&" + API_key;
const Romance2 = BASE_URL + "/discover/movie?with_genres=10749&page=2&" + API_key;
const Romance3 = BASE_URL + "/discover/movie?with_genres=10749&page=3&" + API_key;
const Thriller1 = BASE_URL + "/discover/movie?with_genres=53&page=1&" + API_key;
const Thriller2 = BASE_URL + "/discover/movie?with_genres=53&page=2&" + API_key;
const Thriller3 = BASE_URL + "/discover/movie?with_genres=53&page=3&" + API_key;

const trendingSwiper = document.getElementById("trending-movies");
trendingSwiper.innerHTML = "";
const topRatedSection = document.getElementById("top-rated");
topRatedSection.innerHTML = "";
const animeSection = document.getElementById("anime");
animeSection.innerHTML = "";
const upcomingSection = document.getElementById("upcoming");
upcomingSection.innerHTML = "";
const webseriesSection = document.getElementById("webseries");
webseriesSection.innerHTML = "";
const tv_showsSection = document.getElementById("tv-shows");
tv_showsSection.innerHTML = "";

const section = document.getElementById("Other");
section.innerHTML = "";

const main = document.getElementById("main");

const form = document.getElementById("form");
const search = document.getElementById("search-box");

getMoviesInSlider(popular1, trendingSwiper);
getMoviesInSlider(popular2, trendingSwiper);
getmovies(topRated, topRatedSection);
getmovies(upcoming, upcomingSection);
//getmovies(tv_shows, tv_showsSection);
//getmovies(anime, animeSection);
//getmovies(webseries, webseriesSection);

document.getElementById("action").onmousedown = function () {
  main.innerHTML = '<h1 class = "heading" >Action</h1>';
  section.innerHTML = "";
  getmovies(Action1, section);
  getmovies(Action2, section);
  getmovies(Action3, section);
};

document.getElementById("adventure").onmousedown = function () {
  main.innerHTML = '<h1 class = "heading" >Adventure</h1>';
  section.innerHTML = "";
  getmovies(Adventure1, section);
  getmovies(Adventure2, section);
  getmovies(Adventure3, section);
};

document.getElementById("comedy").onmousedown = function () {
  main.innerHTML = '<h1 class = "heading" >Comedy</h1>';
  section.innerHTML = "";
  getmovies(Comedy1, section);
  getmovies(Comedy2, section);
  getmovies(Comedy3, section);
};

document.getElementById("crime").onmousedown = function () {
  main.innerHTML = '<h1 class = "heading" >Crime</h1>';
  section.innerHTML = "";
  getmovies(Crime1, section);
  getmovies(Crime2, section);
  getmovies(Crime3, section);
};

document.getElementById("drama").onmousedown = function () {
  main.innerHTML = '<h1 class = "heading" >Drama</h1>';
  section.innerHTML = "";
  getmovies(Drama1, section);
  getmovies(Drama2, section);
  getmovies(Drama3, section);
};

document.getElementById("family").onmousedown = function () {
  main.innerHTML = '<h1 class = "heading" >Family</h1>';
  section.innerHTML = "";
  getmovies(Family1, section);
  getmovies(Family2, section);
  getmovies(Family3, section);
};

document.getElementById("documentary").onmousedown = function () {
  main.innerHTML = '<h1 class = "heading" >Documentry</h1>';
  section.innerHTML = "";
  getmovies(Documentary1, section);
  getmovies(Documentary2, section);
  getmovies(Documentary3, section);
};

document.getElementById("horror").onmousedown = function () {
  main.innerHTML = '<h1 class = "heading" >Horror</h1>';
  section.innerHTML = "";
  getmovies(Horror1, section);
  getmovies(Horror2, section);
  getmovies(Horror3, section);
};

document.getElementById("sci-fi").onmousedown = function () {
  main.innerHTML = '<h1 class = "heading" >Sci-fi</h1>';
  section.innerHTML = "";
  getmovies(Sci1, section);
  getmovies(Sci2, section);
  getmovies(Sci3, section);
};

document.getElementById("romance").onmousedown = function () {
  main.innerHTML = '<h1 class = "heading" >Romance</h1>';
  section.innerHTML = "";
  getmovies(Romance1, section);
  getmovies(Romance2, section);
  getmovies(Romance3, section);
};

document.getElementById("thriller").onmousedown = function () {
  main.innerHTML = '<h1 class = "heading" >Thriller</h1>';
  section.innerHTML = "";
  getmovies(Thriller1, section);
  getmovies(Thriller2, section);
  getmovies(Thriller3, section);
};

document.getElementById("search-button").onclick = function () {
  //e.preventDefault;
  const searchTerm = search.value;
  if (searchTerm) {
    section.innerHTML = "";
    getmovies(searchURL + '&query=' + searchTerm + '&page=1', section);
    getmovies(searchURL + '&query=' + searchTerm + '&page=2', section);
    getmovies(searchURL + '&query=' + searchTerm + '&page=3', section);
    getmovies(searchURL + '&query=' + searchTerm + '&page=4', section);
    getmovies(searchURL + '&query=' + searchTerm + '&page=5', section);
    main.innerHTML = `<h1 class = "heading" >Search results for "${searchTerm}"</h1>`;
  } else {
    window.location.reload();
  }
};

function getMoviesInSlider(url, show_type) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMoviesInSlider(data.results, show_type);
    });
}

function showMoviesInSlider(data, show_type) {
  data.forEach((movie) => {
    const { title, poster_path, vote_average, release_date, genre_ids } = movie;
    const swiperSlide = document.createElement("div");
    const release_year = release_date.substr(0, 4);
    const g_id = genre_ids[0];
    swiperSlide.classList.add("swiper-slide");
    swiperSlide.innerHTML = `
    <div class="movie-card">
      <div class="movie-poster">
      <img src="${IMG_URL + poster_path}" alt="${title}">
      </div>
      <div class="movie-info">
      <div class="movie-year">${release_year}</div>
      <div class="movie-name">${title}</div>
      <div class="movie-genre">${getgenre(g_id)}</div>
      <div class="movie-rating">
      <span class="green">${vote_average}</span>
      <i class="fas fa-star star"></i>
    </div>
    `;
    show_type.appendChild(swiperSlide);
  });
}

function getmovies(url, movie_type) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showmovies(data.results, movie_type);
    });
}

function showmovies(data, movie_type) {
  data.forEach((movie) => {
    const { title, poster_path, vote_average, release_date, genre_ids } = movie;
    const movieCard = document.createElement("div");
    const release_year = release_date.substr(0, 4);
    const g_id = genre_ids[0];
    movieCard.classList.add("movie-card");
    movieCard.classList.add("scale");
    if (movie_type == section) {
      movieCard.innerHTML = `
      <div class="movie-poster">      
          <img src="${IMG_URL + poster_path}" alt="${title}">
      </div>
      <div class="movie-info">
              <div class="movie-year">${release_year}</div>
              <div class="movie-name">${title}</div>
              <div class="movie-rating"><span class="${getcolor(
        vote_average
      )}">${vote_average}</span><i class="fas fa-star star"></i></div>
      </div>`;
    } else {
      movieCard.innerHTML = `
    <div class="movie-poster">      
        <img src="${IMG_URL + poster_path}" alt="${title}">
    </div>
    <div class="movie-info">
            <div class="movie-year">${release_year}</div>
            <div class="movie-name">${title}</div>
            <div class="movie-genre">${getgenre(g_id)}</div>
            <div class="movie-rating"><span class="${getcolor(
        vote_average
      )}">${vote_average}</span><i class="fas fa-star star"></i></div>
    </div>`;
    }
    movie_type.appendChild(movieCard);
  });
}

function getcolor(vote) {
  if (vote >= 7.5) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

function getgenre(id) {
  if (id == 28) {
    return "Action";
  } else if (id == 12) {
    return "Adventure";
  } else if (id == 16) {
    return "Animation";
  } else if (id == 35) {
    return "Comedy";
  } else if (id == 80) {
    return "Crime";
  } else if (id == 99) {
    return "Documentary";
  } else if (id == 18) {
    return "Drama";
  } else if (id == 10751) {
    return "Family";
  } else if (id == 14) {
    return "Fantasy";
  } else if (id == 36) {
    return "History";
  } else if (id == 27) {
    return "Horror";
  } else if (id == 10402) {
    return "Music";
  } else if (id == 9648) {
    return "Mystery";
  } else if (id == 10749) {
    return "Romance";
  } else if (id == 878) {
    return "Science Fiction";
  } else if (id == 10770) {
    return "TV movie";
  } else if (id == 53) {
    return "Thriller";
  } else if (id == 10752) {
    return "War";
  } else if (id == 37) {
    return "Western";
  } else {
    return "";
  }
}
