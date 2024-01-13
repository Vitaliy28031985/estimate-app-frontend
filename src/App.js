//import Home from "./Pages/Home/Home"
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { useState } from 'react';
import {PrivateRoute} from './routers/PrivateRoute';
import {PublicRouter} from './routers/PublicRoute';
import Authorization from "./components/Authorization/Authorization";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import LoaderComponent from './components/LoaderComponent/LoaderComponent'
import s from "./App.module.scss";


const Home = lazy(() => import('./Pages/Home/Home' /* webpackChunkName: "Home" */));
const About = lazy(() => import('./Pages/About/About' /* webpackChunkName: "About" */));
const Price = lazy(() => import('./Pages/Price/Price' /* webpackChunkName: "Price" */));
const Profile = lazy(() => import('./Pages/Profile/Profile' /* webpackChunkName: "Profile" */));
const Projects = lazy(() => import('./Pages/Projects/Projects' /* webpackChunkName: "Projects" */));
const Project = lazy(() => import('./Pages/Project/Project' /* webpackChunkName: "Project" */));


function App() {
  const [showRegister, setShowRegister] = useState(false)
  const handleToggleRegister = () => {
    setShowRegister(showRegister => !showRegister);
}
  return (
  
    <div>
      <Header showRegister={handleToggleRegister}/>
      {showRegister && (<Modal><Authorization showRegister={handleToggleRegister} forModal={true}/></Modal>) }
      
      <div className={s.container}>
      <Suspense fallback={<LoaderComponent/>}>
  <Routes>
        <Route path="/" element={<PublicRouter><Home /></PublicRouter>} />
        <Route path="/about" element={<PublicRouter><About /></PublicRouter>} />
        
        <Route path="/price" element={<PrivateRoute><Price /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/projects" element={<PrivateRoute><Projects/></PrivateRoute>} />
        <Route path="/projects/:id" element={<PrivateRoute><Project/></PrivateRoute>}/>
        <Route path="*" element={<p>page not found</p>} />
      </Routes>
      </Suspense>
      </div>
   </div>
  );
}

export default App;
//estimate-app-frontend /estimate-app-frontend