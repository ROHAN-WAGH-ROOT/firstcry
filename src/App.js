import { BrowserRouter } from 'react-router-dom';
import Nav from './Routes/index';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      {window.location.pathname === '/Login' ? <div></div> : <header>
        <Home />
      </header>}
      <Nav />
      {window.location.pathname === '/Login' ? <div></div> : <footer style={{ position: 'absolute', bottom: 0 }}>@copyright by rohan wagh</footer>}
    </BrowserRouter>
  );
}

export default App;
