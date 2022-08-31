import React from 'react'
import AcctiveIcon from '../icon_tiktok/AcctiveIcon'

function AcountItem2() {
  return (
    <div className="Wrapper_Account_item">
      <img
        className="Avatar_account"
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/02bad37b1e9e5a3fc5b96e144d14f78b~c5_100x100.jpeg?x-expires=1662015600&x-signature=QjCmh%2B37m%2BpFTPKgBxJAkkzzLqs%3D"
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
export default AcountItem2
