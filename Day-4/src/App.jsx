import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route, BrowserRouter}  from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import AddEventPage from './pages/AddEvent'
import EventsList from './pages/EventsList'
import ViewEvent from './pages/ViewEvent'
import AllBookings from './pages/AllBookings'
import UserEventsList from './pages/UserEventList'
import UserView from './pages/UserView'
import BookingForm from './pages/BookingForm'
import UserAllBookings from './pages/UserAllBookings'
import PaymentForm from './pages/PaymentForm'
import PaymentList from './pages/PaymentList'
import Nav from './pages/Nav'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/add' element={<AddEventPage/>}></Route>
      <Route path='/view' element={<ViewEvent/>}></Route>
      <Route path='/userview' element={<UserView/>}></Route>
      <Route path='/list' element={<EventsList/>}></Route>
      <Route path='/booking' element={<BookingForm/>}></Route>
      <Route path='/userlist' element={<UserEventsList/>}></Route>
      <Route path='/allbookings' element={<AllBookings/>}></Route>
      <Route path='/payment' element={<PaymentForm/>}></Route>
      <Route path='/paymentlist' element={<PaymentList/>}></Route>
      {/* <Route path='/nav' element={<Nav/>}></Route> */}
      <Route path='/userallbookings' element={<UserAllBookings/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
