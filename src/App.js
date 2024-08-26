import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import NavBar from './components/NavBar';
import AddInstance from './components/AddInstance';
import CoursesList from './components/CoursesList';
import InstanceList from './components/InstanceList';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<AddCourse/>}></Route>
                <Route path='/add-course' element={<AddCourse/>}></Route>
                <Route path='/add-instance' element={<AddInstance/>}></Route>
                <Route path='/list-course' element={<CoursesList/>}></Route>
                <Route path='/list-instance' element={<InstanceList/>}></Route>
            </Routes>
        </BrowserRouter>

        
    </div>
  );
}

export default App;
