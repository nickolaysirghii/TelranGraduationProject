
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Tools from './pages/ToolsAndEquipment/Tools';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Header />
      <Tools />
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
