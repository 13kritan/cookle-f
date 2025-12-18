
import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  return (
    <div className="App bg-red-600 h-screen flex flex-col">
      <Navbar />

      <div className="body w-screen bg-blue-700 h-[90%] flex flex-col">
        <Search />
      </div>
    </div>
  );
}

export default App;
