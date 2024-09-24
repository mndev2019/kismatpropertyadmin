
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Propertyinfo from './Pages/Propertyinfo'
import SelectProperty from './Pages/SelectProperty'
import PropertyDetails from './Pages/PropertyDetails'
import RentalPropertyDetails from './Pages/RentalPropertyDetails'
import BuildingType from './Pages/BuildingType'
import Propertiinfo2 from './Pages/Propertiinfo2'

function App() {
  const ThemeRoutes = createBrowserRouter(
      createRoutesFromElements(
        <>
           <Route path='/' element={<Layout/>}>
            
            <Route index element={<Propertyinfo/>}/>
            <Route path='select-property' element={<SelectProperty/>}/>
            <Route path='/property-details' element={<PropertyDetails/>}/>
            <Route path='/rental-propertydetails' element={<RentalPropertyDetails/>}/>
            <Route path='/house-type' element={<BuildingType/>}/>
            <Route path='property-type' element={<Propertyinfo/>}/>
            <Route path='/property-info' element={<Propertiinfo2/>}/>
           
           </Route>
        </>
      )
  )

  return (
    <>
         <RouterProvider router={ThemeRoutes} /> 
    </>
  )
}

export default App
