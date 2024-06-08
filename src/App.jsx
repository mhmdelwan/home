import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';

let routers = createBrowserRouter([
  {path:'/' , element:<Layout /> , children:[
    {index:true , element:<Home />},
    {path:'about' , element:<About />},
    {path:'*' , element:<NotFound />},
  ]}
])


function App() {
  return <>
 
    <RouterProvider router={routers} />
 
  </>
}

export default App;
