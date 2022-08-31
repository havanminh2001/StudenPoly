import React from 'react'
import AcctiveIcon from '../icon_tiktok/AcctiveIcon'

function AcountItem() {
  return (
    <div className="Wrapper_Account_item">
      <img
        className="Avatar_account"
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662015600&x-signature=0vRa7R7V3fx%2B1lPX0EIXconmsdQ%3D"
        alt=""
      />
      <div className="info_account">
        <h4 className="username_account">
          <span>TheAnh28</span>
          <AcctiveIcon />
        </h4>
        <span>
          <p className="name_Acc">Thế anh 28 entertiment</p>
        </span>
      </div>
    </div>
  )
}
export default AcountItem
