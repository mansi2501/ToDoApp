import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Products from './products/Products';
import ToDo from './todo/ToDo';
import FormValidation from './userform/FormValidation';
import { FormDataProvider } from './userform/FormDataContext';

function App() {
  return (
    <div className="App">
      <Router>
        <FormDataProvider>

          <Header />
          <Routes>
            {/* <Route path="/" /> */}
            <Route path="/todo" element={<ToDo />} />
            <Route path="/products" element={<Products />} />
            <Route path="/form" element={<FormValidation />} />
          </Routes>
        </FormDataProvider>

      </Router>
    </div>
  );
}

export default App;
