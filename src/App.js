import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Home from './pages/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2';
import AdminPage from './pages/AdminPage';
import Admin from './layouts/Admin';
import Notfound from './pages/Notfound';
import WithNav from './layouts/WithNav';

function App() {
  return (  
    <>  
      <Router>
        <Routes>
          {/* { true && <Route path='*' element={<Navigate replace to="/"></Navigate>}></Route> } */}
          <Route exact path='/' element={<Login/>}></Route>
          <Route exact path='*' element={<Notfound/>}></Route>
          <Route path='/' element={<WithNav/>}>
            <Route exact path='home' element={<Home/>}></Route>
            <Route exact path='page1' element={<Page1/>}></Route>
            <Route path='admin/' element={<Admin/>}>
              <Route path='' element={<AdminPage/>}></Route>
              <Route exact path='page2' element={<Page2/>}></Route>
            </Route> 
          </Route>
        </Routes>
     </Router>
    </>
    
  );
}

export default App;
