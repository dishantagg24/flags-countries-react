/** @format */

import { Route, Routes } from 'react-router';
import './App.scss';
import { Home } from './pages/Home';
import SingleFlag from './pages/SingleFlag';
import { Error } from './pages/Error';
import { Navbar } from './components/Navbar';
import { useGlobalContext } from './context';

function App() {
  const { theme } = useGlobalContext();
  return (
    <div className='App' id={theme}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alpha/:id' element={<SingleFlag />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
