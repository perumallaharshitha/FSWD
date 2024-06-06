import './App.css'
import Navbar from './container/Navbar.jsx'
import Footer from './container/Footer.jsx'
import Logo from './container/Logo.jsx'
import img1 from './assets/cartoon-network.jpg'
import img2 from './assets/sony-yay.jpeg'
import img3 from './assets/disney.jpg'
import img4 from './assets/nick.png'
import img5 from './assets/romedy.jpeg'
import img6 from './assets/wb.jpg'
import img7 from './assets/hollywood.jpg'
import img8 from './assets/mnx.jpg'
import main from './assets/enter.png'


function App(){
  let data=[
    { name: "CartoonNetwork", image: img1},
    { name: "Sony-Yay", image: img2},
    { name: "Disney", image: img3},
    { name: "Nick", image: img4},
    { name: "Romedy Now", image: img5},
    { name: "WB", image: img6},
    { name: "Hollywood", image: img7},
    { name: "MNX", image: img8}
    ]
  let head =[
    {image:"main"}
  ]
  return (
    <div>
      <Navbar/>
      <div className="container">
        {
          data.map((item1,index) => {
          return <Logo value={item1}/>
        })
        }
      </div>
      <Footer/>
    </div>
  )
}
export default App;