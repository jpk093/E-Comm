import './App.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/list" element={<h1>Products Listing Component</h1>}/>
            <Route path="/add" element={<h1>Add Product Component</h1>}/>
            <Route path="/update" element={<h1>Update Product Component</h1>}/>
            <Route path="/logout" element={<h1>Logout Component</h1>}/>
            <Route path="/profile" element={<h1>Profile Component</h1>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
