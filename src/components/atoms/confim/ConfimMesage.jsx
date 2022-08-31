import {  Modal } from 'antd'
import Button from '../../atoms/button/Button'
import React from 'react'

const ConfimMesage = ({ visible, handleCancel , onOke }) => {
  return (
    <>
      <Modal
        title="! -- Thông Báo"
        onCancel={handleCancel}
        width={350}
        visible={visible}
         footer={[
          <>
            <Button outline onClick={handleCancel} >Hủy</Button>
            <Button primary onClick={onOke}>Xác Nhận</Button>
          </>,
        ]}
      >
        <p>Bạn Chắc chắn muốn xóa nhân viên này ?</p>
      </Modal>
    </>
  )
}

export default ConfimMesage
