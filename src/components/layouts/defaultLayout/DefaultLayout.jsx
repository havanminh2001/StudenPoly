import React from 'react'
import Header from './headerLayout/Header'
import Sliebar from './sliebarLayout/Sliebar'
 
function DefaultLayout({ children }) {
  return (
    <div className='wapper_defaultLayout'>
      <Header />
      <div className="container_defaultLayout">
        <Sliebar />
        <div className="content_defaultLayout">{children}</div>
      </div>
    </div>
  )
}
export default DefaultLayout
