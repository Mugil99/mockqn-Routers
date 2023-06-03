import logo from './logo.svg';
import './App.css';
import Navigate from './Components/Navigate';
import Home from './Components/Home';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigate/>
      <Routes>
        <Route path='/mockqn-Routers' element={<Home/>}/>
        <Route path='/mockqn-Routers/blogs' element={<Blogs/>}/>
        <Route path='/mockqn-Routers/contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
