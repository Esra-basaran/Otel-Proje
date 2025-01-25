import {Routes,Route} from 'react-router-dom';
import Header from './body/header';
import Footer from './body/footer';
import Login from './pages/login';
import Home from './pages/home';
import Rooms from './pages/rooms';
import Pool from './pages/pool';
import Hotel from './pages/hotel';
import Basket from './pages/basket';
import OtelItem from './pages/otelItem';



import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route  path='/rooms' element={<Rooms/>}/>
        <Route  path='/pool' element={<Pool/>}/>
        <Route  path='/hotel' element={<Hotel/>}/>
        <Route  path='/basket' element={<Basket/>}/>
        <Route  path='/basket' element={<OtelItem/>}/>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
