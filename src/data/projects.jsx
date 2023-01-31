import facebot from '../assets/projects-assets/facebot.png'
import bggenerator from '../assets/projects-assets/bggenerator.png'
import fluffimage from '../assets/projects-assets/fluff.png'
import moviedb from '../assets/projects-assets/moviedb.png'
import kidney from '../assets/projects-assets/kidney.jpeg'

export const projects = [
   {
      projectTitle: 'Fluff Koppi Cafe',
      description: 'The design of this website was created using Tailwind CSS and React Vite. The site was designed to be responsive, so it looks great on both desktop and mobile devices.',
      image: fluffimage,
      tech: '#React #TailwindCSS',
      projUrl: 'https://fluffkoppi.vercel.app/'
   },
   {
      projectTitle: 'The Movie DB',
      description: 'The application fetches the latest movie and series from Movie Database API. The user can search for movies and series by title. The application also allows the user to view the ratings and release date of each movie or series.',
      image: moviedb,
      tech: '#React',
      projUrl: 'http://react-movie-search-seven.vercel.app/'
   },
   {
      projectTitle: 'FaceBot',
      description: 'A simple ReactJS app with Search filter functionality, updates the display to show filtered names. Using an API to fetch data. Check it out!',
      image: facebot,
      tech: '#React #TachyonsCSS',
      projUrl: 'https://kevinxmyr.github.io/Facebot/'
   },
   {
      projectTitle: 'Background Generator',
      description: 'Background generator lets you pick the color gradient. This project is coded in using HTML, CSS and JavaScript. Plus it shows the color code in RGB! try it out!',
      image: bggenerator,
      tech: '#HTML #CSS #JavaScript',
      projUrl: 'https://kevinxmyr.github.io/BackgroundGenerator/'
   },
   {
      projectTitle: `National Kidney Foundation (Availbale on Mobile View Only, copy website)`,
      description: `This is a copy of the website kidney.org, which I found on the Internet. I was hoping to test my knowledge of tailwind CSS, and this is a perfect example of what I'm talking about. See live preview below.`,
      image: kidney,
      tech: '#React #TailwindCSS',
      projUrl: 'https://national-kidney-website-copy.vercel.app/#'
   }
   
]