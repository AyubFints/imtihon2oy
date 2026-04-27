// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from "./pages/Home";
// import Project from "./pages/Project";
// import "./App.css";
// import Images from './pages/Images';

// function App() {
//   return (
//     <div>
//       <Header/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Home" element={<Home />} />
//         <Route path="/Project" element={<Project />} /> 
//         <Route path='/Images' element={<Images/>}/>
//       </Routes>
//       <Footer/>
//     </div>
//   )
// }

// export default App;
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Project from "./pages/Project";
import "./App.css";
import Images from './pages/Images';
import News from './pages/News';
import Galleriy from './pages/Gallery';
import Server from './pages/Services';
import Kitchen from './pages/Kitchen';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Project" element={<Project />}>
          <Route path="Images" element={<Images/>}/>
          <Route path="News" element={<News/>}/>
          <Route path="Gallery" element={<Galleriy/>}/>
        </Route>
        <Route path="/Server" element={<Server/>}/>
        <Route path="/Kitchen" element={<Kitchen/>}/>
        <Route path="/Gallery" element={<Galleriy/>}/>
        <Route path="/Contact" element={<Contact/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App;