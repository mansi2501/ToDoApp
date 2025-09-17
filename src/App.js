import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Products from './products/Products';
import ToDo from './todo/ToDo';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Routes>
            {/* <Route path="/" /> */}
            <Route path="/todo" element={<ToDo />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </Router>
      {/* <ToDo />
      <Products /> */}
    </div>
  );
}

export default App;
