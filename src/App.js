import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PageSignin from './pages/signin';
import Dashboard from './pages/dashboard';
import CategoriesPage from './pages/categories';
import CategoriesCreate from './pages/categories/create';
import CategoriesEdit from './pages/categories/edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Dashboard/>}/>
        <Route  path='/signin' element={<PageSignin/>} />
        <Route  path='/categories' element={<CategoriesPage/>} />
        <Route  path='/categories/create' element={<CategoriesCreate/>} />
        <Route  path='/categories/edit/:id' element={<CategoriesEdit/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
