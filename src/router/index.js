import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home.js'
import About from '../pages/About.js'
import Contact from '../pages/Contact.js'
import CustomerList from '../pages/Customer.js'
import CustomerCreate from '../pages/CustomerCreate.js'
import CustomerEdit from '../pages/CustomerEdit.js'
import Customerview from '../pages/CustomerView.js'


function MyRouter(){
  return(
   <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/about-us" element={<About />} />
      <Route path = "/contact-us" element={<Contact />} />
      <Route path = "/customer" element={<CustomerList />} />
      <Route path = "/customer/create" element={<CustomerCreate />} />
      <Route path = "/customer/:id/edit" element={<CustomerEdit />} />
      <Route path = "/customer/:id/view" element={<Customerview />} />
   </Routes>
  )
}

export default MyRouter;