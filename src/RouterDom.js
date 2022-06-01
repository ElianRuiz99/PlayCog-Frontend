import { Route, BrowserRouter, Routes } from 'react-router-dom';
//Componentes
import { Home } from './components/Home';
import { CreateAccount } from './components/CreateAccount';
import { ListVideogame } from './components/ListVideogame';
import { MyAccount } from './components/MyAccount';

function RouterDom(){
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/createAccount' element={ <CreateAccount />} />
            <Route path='/videogame/:correo' element={ <ListVideogame />} />
            <Route path='/myAccount/:correo' element={ <MyAccount />} />
            {/* <Route path='*' element={ <NotFoundPage />} /> */ }
          </Routes>
        </BrowserRouter>
    );
}

export { RouterDom };