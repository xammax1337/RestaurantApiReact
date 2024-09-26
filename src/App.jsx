import { useState } from 'react'
import TableList from './components/TableList'
import BookingCreate from './components/BookingCreate'
import Navbar from './components/Navbar'

import './App.css'

export default function App() {

  return (
    <>
      <Navbar />
      <BookingCreate />
      <TableList />
    </>
  )
}
