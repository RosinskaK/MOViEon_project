# MOViEon app
Great news! MOViEon is finally done!🎉🎊

The MOViEon project is a movie website similar to streaming services like Netflix and SkyShowTime, it downloads data about movies and series from <a href="https://developer.themoviedb.org/docs/getting-started" target="_blank" rel="noreferrer" rel="noopener"> TheMovieDb API </a>, recommends film premieres and the most popular films and series rated by TMDB users.
MOViEon allows user to store selected movies and series by adding them to the created My List. It allows to search for movies in the provided search engine. Has also a module showing details of a given movie or series along with a link to the trailer on YouTube.

<!-- So My list (a database storing a list of favorite films) is working fine and search engine for movies too.
Now I'm working on adding a modal showing details of a given film and maybe I would also add a link to the movies trailers on YouTube 😁
🙋 so stay tuned for newest improvements. -->

<!-- ➡️ Project Link: https://readytogoapp.netlify.app  -->


## Screenshots

<!-- <div align="center"> 
  <img src="./public/desktopmain.png" alt="screenshot" />
    <img src="./public/desktop.signin.png" alt="screenshot" width="405" height="auto"/>
  <img src="./public/desktopmaininstructions.png" alt="screenshot" width="405" height="auto"/>
  <img src="./public/desktopmaindone.png" alt="screenshot" />
  <img src='./public/desktopsignup.png' alt="screenshot" />
  <img src='./public/mobilemain.png' alt="screenshot" width="300" height="auto" />
  <img src='./public/mobilesignin.png' alt="screenshot" width="300" height="auto"/>
  <img src='./public/mobilemaindone.png' alt="screenshot" width="300" height="auto"/>
  <img src='./public/mobilesignup.png' alt="screenshot" width="300" height="auto"/>
</div> -->


## About the Project

Primarily I created MOViEon to learn how to communicate with the API database, practice fetching and learn more about JS promises and try to create a large project based on React.js on my own. 
But MOViEon is more than that. I tried to make it user-friendly and attractive in appearance. It not only shows newest movies or top rated movies or series but it also gives the opportunity to use a saveable My List, according to the user's preferences. 

To construct MOViEon, I used React.js components, SCSS, Vite, Context API - transfers data globally, Local Storage - stores data saved in My List, npm Styled Components - carousels on the home page, Material UI - modal with a description for each movie or series and links to trailers on YouTube.


## Table of Contents
- [About the project](#about-the-project)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)


## Usage

My list is a storage where user can save his chosen movies or series according to his/her needs. These may be movies that he/her has already watched and wants to keep a list of watched movies or it can be a list of his/hers favourites or a list of movies yet to watch. The choice of use is entirely given to the user. The shared movie search engine is helpful in the process of creating it. TMDB's movie database is large and will definitely allow to find another movie worth watching 😉


## Technologies Used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) 

![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

- Context API

- Local Storage


## Setup

This project uses npm as package manager

```bash
  npm install
```
To run locally
clone the project

```bash
  git clone https://github.com/RosinskaK/MOViEon_project.git
```

Go to the project directory

```bash
  cd MOViEon_project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_API_KEY=`

you need to go to [TheMovieDB API](https://developer.themoviedb.org/reference/intro/getting-started) and fetch your own API key to get started


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Acknowledgements

- [Vite](https://vitejs.dev/)
- [Netlify](https://www.netlify.com/)
- [Canva](https://www.canva.com/)


## Contact

Created by Kasia Rosińska [@RosinskaK](https://www.linkedin.com/in/katarzyna-rosinska/) - feel free to contact me! 👋

If you ever find any issuses or bugs in my project, please conatact me and give me a notice about it 🙇‍♀️

