import React from 'react'
import AcctiveIcon from '../icon_tiktok/AcctiveIcon'

function AcountItem() {
  return (
    <div className="Wrapper_Account_item">
      <img
        className="Avatar_account"
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/de6393e507b788f29189fb395448c265~c5_300x300.webp?x-expires=1657940400&x-signature=NBx1xgaFQFi1Mj4Knrnlo0GlZMU%3D"
        alt=""
      />
      <div className="info_account">
        <h4 className="username_account">
          <span>oanhoanh_0111</span>
          <AcctiveIcon />
        </h4>
        <span>
          <p className="name_Acc">Hà Thị Oanh</p>
        </span>
      </div>
    </div>
  )
}
export default AcountItem
