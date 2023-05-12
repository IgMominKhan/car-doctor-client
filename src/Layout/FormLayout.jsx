import { Outlet } from 'react-router-dom'
import Navbar from '../Shared/Navbar'



const FormLayout = () => {
  return (
    <div className='max-w-7xl mx-auto md:w-11/12 '>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default FormLayout
