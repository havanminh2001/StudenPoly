import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AcountItem from '../../../atoms/accountItem/AcountItem'
import AcountItem2 from '../../../atoms/accountItem/AcountItem2'
import {  faAccessibleIcon, faAccusoft } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons'
import Button from '../../../atoms/button/Button'


function Sliebar() {
  return (
    <aside className="wrapper_slideBar">
      <ul>
        <li>
          <Button to={"/"}><FontAwesomeIcon icon={faArrowAltCircleDown} /> Trang Chủ</Button>
        </li>
        <li>
          <Button to={"/"}> <FontAwesomeIcon icon={faAddressCard} /> Danh Sách Vị Trí</Button>
        </li>
        <li>
          <Button to={"/UserManage"}><FontAwesomeIcon icon={faAccessibleIcon} /> Danh Sách Nhân Viên</Button>
        </li>
        <li>
          <Button to={"/"}><FontAwesomeIcon icon={faAccusoft} /> Danh Sách Cán Bộ</Button>
        </li>
        <p style={{fontWeight: 100, marginLeft:16 }}>Danh Sách được đề xuất</p>
        <AcountItem />
        <AcountItem2 />
        <AcountItem />
      </ul>
    </aside>
  )
}

export default Sliebar
