
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';

import NotFound from './Components/NotFound/NotFound';
import Property from './Components/Property/Property';
import Users from './Components/Users/Users';
import AddUser from './Components/AddUser/AddUser';
import Edit from './Components/Edit/Edit';
import Pending from './Components/Pending/Pending';
import Profile from './Components/Profile/Profile';
import Analytics from './Components/Analytics/Analytics';

let routers = createBrowserRouter([
  {path:'/' , element:<Layout /> , children:[
    {index:true , element:<Home />},
    {path:'property' , element:<Property />},
    {path:'users' , element:<Users />}, 
    {path:'addUser', element:<AddUser />},
    {path:'edit', element:<Edit />},
    {path:'pending', element:<Pending />},
    {path:'profile', element:<Profile />},
    {path:'analytics', element:<Analytics />},
      
    {path:'*' , element:<NotFound />},
  ]}
])


function App() {
  return <>
 
    <RouterProvider router={routers} />
 
  </>
}

export default App;
