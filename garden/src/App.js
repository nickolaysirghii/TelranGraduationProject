
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { pagesData } from "./data/routsData"

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Header />
        <Routes>
      {
        pagesData.map((elem,idx)=>{
          return <Route key={idx} path={elem.path} Component={elem.element} />
        })
      }
     </Routes>
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
