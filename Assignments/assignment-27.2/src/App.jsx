import './App.css';
import Navbar from './container/Navbar.jsx';
import Body from './container/Body.jsx';
import image1 from './assets/laptop.avif';
import image2 from './assets/blog.avif';
import image3 from './assets/covid.jpeg';

function App() {
  const data = [
    {
      image: image1,
      head: "News App using ReactJS (Parsing XML RSS feed to JSON)",
      des: "News App using ReactJS (Parsing XML to JSON) Photo by Christina Morillo from PexelsLive Demo:",
      title: "Mehul Kothari",
      date: "Aug 12, 2020 4:32"
    },
    {
      image: image2,
      head: "Medium Like Blogging App Using Angular 9 and Firebase",
      des: "Creating a Medium-Like App using Angular 9 and Firebase Photo by Miguel Padriåån from PexelsLive Demo:",
      title: "Mehul Kothari",
      date: "Jun 10, 2020 10:59"
    },
    {
      image: image3,
      head: "COVID 19 Tracker (Statistics) app using Angular",
      des: "COVID 19 Tracker (Statistics) app using Angular Dark Mode Introduction Everyone is aware",
      title: "Mehul Kothari",
      date: "Apr 04, 2020 08:46"
    }
  ];

  return (
    <div className="container">
      <Navbar />
      <div className="cards-container">
        {data.map((item, index) => (
          <Body key={index} value={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
