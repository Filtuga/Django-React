
import './App.css';
import {Container} from'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/screens/HomeScreen';
import {BrowserRouter,Routes, Route,} from 'react-router-dom'
import ProductScreen from './components/screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    
      <Header>
        <main className='py-3'></main>
      </Header>
        <main>
          <Container>
          <Routes>
            <Route path='/' Component={HomeScreen} exact></Route>
            <Route path='/product/:id' Component={ProductScreen} exact></Route>
            </Routes>
          </Container>
        </main>
      

      <Footer></Footer>
      
      </BrowserRouter>
  );
}

export default App;
