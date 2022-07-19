import React from 'react'
import HeaderOnly from './headerLayout/HeaderOnly'
 function DefaultLayoutOnly ({children}) {
  return (
    <div>
      <HeaderOnly />
      <div className="container">
         <div className="content">{children}</div>
      </div>
    </div>
  )
}
export default DefaultLayoutOnly
