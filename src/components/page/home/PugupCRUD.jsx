import { DatePicker, Form, Input, Modal, Select } from 'antd'
import axios from 'axios'
import Button from '../../atoms/button/Button'
import React from 'react'
import { Option } from 'antd/lib/mentions'
import { FORM_MODE } from './HomePage'
import moment from 'moment'

function PugupCRUD({ visible, hanldCancel, setData, thaoTac, dataItem, getData }) {
  const [form] = Form.useForm()
  const dateFormat = 'YYYY-MM-DD'
  const [getDataChucVu, setDataChucVu] = React.useState([])

  const baseURL = 'http://localhost:8080/home/employee'

  React.useEffect(() => {
    fetch('http://localhost:8080/home/position')
      .then((response) => response.json())
      .then((dataRepo) => setDataChucVu(dataRepo))
  }, [])

  function submitData(submitData) {
    form.validateFields().then(async (res1) => {
      if (res1?.errorsFields?.length > 0) {
        return
      }
      let data = submitData
      if (!data) {
        data = form.getFieldsValue(true)
      }
      if (thaoTac === FORM_MODE.NEW) {
        axios
          .post(baseURL, {
            address: data.address,
            birtday: data.birtday,
            name: data.name,
            position: {
              id: data.position,
            },
          })
          .then(() => {
            hanldCancel()
            axios('http://localhost:8080/home/employee').then((respon) => {
              setData(respon.data)
              getData(5)
            })
          })
      } else {
        axios
          .put(`${baseURL}/${dataItem.id}`, {
            address: data.address,
            birtday: data.birtday,
            name: data.name,
            position: {
              id: data.position,
            },
          })
          .then(() => {
            hanldCancel()
            axios('http://localhost:8080/home/employee').then((respon) => {
              setData(respon.data)
              getData(5)
            })
          })
      }
    })
  }

  if (thaoTac === FORM_MODE.UPDATE || thaoTac === FORM_MODE.VIEW) {
    form.setFieldsValue({
      id: dataItem?.id,
      address: dataItem?.address,
      name: dataItem?.name,
      birtday: moment(dataItem?.birtday, dateFormat),
      position: dataItem.position.name,
    })
  } else {
    form.setFieldsValue({
      position: 201,
    })
  }
  return (
    <>
      <Modal
        visible={visible}
        title={
          thaoTac === FORM_MODE.UPDATE
            ? 'Cập nhật nhân viên'
            : thaoTac === FORM_MODE.NEW
            ? 'Thêm Mới nhân viên'
            : 'xem nhân viên'
        }
        onCancel={hanldCancel}
        footer={
          thaoTac !== FORM_MODE.VIEW
            ? [
                <Button outline key="back" onClick={hanldCancel}>
                  Thoát
                </Button>,
                <Button primary onClick={() => submitData()} key="submit" type="primary">
                  Lưu
                </Button>,
              ]
            : [
                <Button outline key="back" onClick={hanldCancel}>
                  Thoát
                </Button>,
              ]
        }
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item label="Tên" name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input disabled={thaoTac === FORM_MODE.VIEW} />
          </Form.Item>
          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input disabled={thaoTac === FORM_MODE.VIEW} />
          </Form.Item>
          <Form.Item
            label="Ngày sinh"
            name="birtday"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <DatePicker disabled={thaoTac !== FORM_MODE.NEW} format="DD-MM-YYYY" />
          </Form.Item>
          <Form.Item label="Chức vụ" name="position">
            <Select disabled={thaoTac === FORM_MODE.VIEW}>
              {getDataChucVu.map((data, index) => {
                return (
                  <Option key={index} value={data.id}>
                    {data.name}
                  </Option>
                )
              })}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default PugupCRUD
