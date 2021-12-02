import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Bestwork from './components/Bestwork';
function App() {
  return (
  <div>
    <Navbar />
    <Header />
    {/* <div className="App" className="p-6 items-center justify-center">
        <h1 className="text-blue-400 font-extrabold">Hello World!</h1>
        <p className="tracking-widest">This is my first React App.</p>
    </div> */}
    <Bestwork />
  </div>
  
  );
}

export default App;