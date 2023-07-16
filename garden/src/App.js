
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Header />
      <Cart />
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
