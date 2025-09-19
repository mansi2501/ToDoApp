import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Products from './products/Products';
//import ToDo from './todo/ToDo';
import FormValidation from './userform/FormValidation';
import { FormDataProvider } from './userform/FormDataContext';
import LazyComponent from './component/LazyComponent';
import { lazy, Suspense } from 'react';


// const ToDo = lazy(() =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve(import("./todo/ToDo")), 2000) // 2 sec delay
//   )
// );


const ToDo = lazy(() =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      import("./todo/ToDo")
        .then(resolve)
        .catch(() => resolve({ default: <h3>ToDo component not found</h3> })); // resolve with fallback
    }, 2000)
  )
);

function App() {
  return (
    <div className="App">
      <Router>
        <FormDataProvider>

          <Header />
          <Routes>
            {/* <Route path="/" /> */}
            <Route path="/todo" element={<Suspense fallback={<h3>Loading....</h3>}><ToDo /></Suspense>} />
            <Route path="/products" element={<Products />} />
            <Route path="/form" element={<FormValidation />} />
            <Route path="/lazy" element={<LazyComponent />} />
          </Routes>
        </FormDataProvider>

      </Router>
    </div >
  );
}

export default App;
