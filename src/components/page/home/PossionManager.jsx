import React from 'react'
import PugupCRUD from './PugupCRUD'
import Button from '../../atoms/button/Button'
import ConfimMesage from '../../atoms/confim/ConfimMesage'
import { Card, notification } from 'antd'
import { SuccessIcon } from '../../atoms/icon_tiktok/SuccessIcon'

export const FORM_MODE = {
  NEW: 1,
  UPDATE: 2,
  VIEW: 3,
  SEARCH_MODAL: 4,
}

const Homepage = () => {
  const [data, setData] = React.useState([])
  const [visible, setVisible] = React.useState(false)
  const [totalItems, setTotalItems] = React.useState()
  const [totalPages, setTotalPages] = React.useState()
  const [currentPage, setCurrentPage] = React.useState(0)
  const [visibleConfim, setVisibleConfim] = React.useState(false)
  const [idDelete, setIdDelete] = React.useState({})
  const [thaoTac, setThaoTac] = React.useState()
  const [dataItem, setDataItem] = React.useState({})
  const [itemBeforeFilter, setItemBeforeFilter] = React.useState([])

  const searchUnit = (e) => {
    const r = itemBeforeFilter.filter((i) => i.name.toLowerCase().indexOf(e.toLowerCase()) > -1)
    setData(r)
  }

  const showConfim = (id) => {
    setIdDelete(id)
    setVisibleConfim(true)
  }
  const closeConfim = () => {
    setVisibleConfim(false)
  }

  const Okconflim = () => {
    deleteEmployee(idDelete)
    setVisibleConfim(false)
  }
  //////////////////////////////////
  const showModal = () => {
    setVisible(true)
  }
  const handleCancel = () => {
    setVisible(false)
  }
  const deleteEmployee = async (id) => {
    fetch(`http://localhost:8080/home/employee/${id}`, { method: 'DELETE' }).then(() => {
      deleteMessager('success')
      return getData(5)
    })
  }
  const getData = (value) => {
    fetch(`http://localhost:8080/home/employee/page?page=${currentPage}&size=${value}`)
      .then((response) => response.json())
      .then((dataRepo) => {
        setData(dataRepo.data)
        setTotalItems(dataRepo.totalItems)
        setTotalPages(dataRepo.totalPages)
        setCurrentPage(dataRepo.currentPage)
        setItemBeforeFilter(dataRepo.data)
      })
  }

  const nextPage = () => {
    if (currentPage > totalPages) {
      return alert('hết trang rồi còn đâu mà next')
    }
    setCurrentPage(currentPage + 1)
  }
  const PrviePage = () => {
    if (currentPage < 1) {
      return alert('hết trang rồi còn đâu mà next')
    }
    setCurrentPage(currentPage - 1)
  }

  React.useEffect(() => {
    getData(5)
  }, [currentPage])

  const deleteMessager = (type) => {
    notification[type]({
      message: 'Xóa thành công',
      icon: <SuccessIcon />,
      className: 'SuccessMesage',
    })
  }
  return (
    <div>
      <div className="search_header"></div>
      <Card style={{ minHeight: 400, maxHeight: '100%' }}>
        <table>
          <tr>
            <th>mã</th>
            <th>Tên Nhân viên</th>
            <th>Ngày sinh</th>
            <th>Địa Chỉ</th>
            <th>Chức Vụ</th>
            <th>
              Thao Tác{' '}
              <input
                style={{marginLeft:10 , borderRadius: 10  }}
                onChange={(e) => searchUnit(e.target.value)}
                spellCheck={false}
                placeholder="Tìm kiếm tài khoản"
              />
            </th>
          </tr>
          {data.map((datas) => (
            <tr>
              <td>{datas.id}</td>
              <td>{datas.name}</td>
              <td>{datas.birtday}</td>
              <td>{datas.address}</td>
              <td>{datas.position.name}</td>
              <td>
                <Button
                  onClick={(e) => {
                    showModal(datas, true)
                    setThaoTac(FORM_MODE.UPDATE)
                    setDataItem(datas)
                  }}
                  dataItem={data}
                  primary
                  small
                  roundedButton
                >
                  Cập nhật
                </Button>
                <Button
                  onClick={(e) => {
                    showModal(e)
                    setDataItem(datas)
                    setThaoTac(FORM_MODE.VIEW)
                  }}
                  outline
                  small
                  roundedButton
                >
                  Xem NV
                </Button>
                <Button onClick={(id) => showConfim(datas.id)} SuccessIcon roundedButton>
                  Xóa NV
                </Button>
              </td>
            </tr>
          ))}
        </table>
      </Card>
      <div style={{ marginTop: 10 }} class="pagination">
        <Button Button text>
          Tổng số nhân viên : {totalItems} / {totalPages} Trang
        </Button>
        <Button onClick={PrviePage} roundedButton outline href="#">
          &laquo;
        </Button>
        <Button roundedButton outline href="#">
          {currentPage + 1}
        </Button>
        <Button onClick={nextPage} roundedButton outline href="#">
          &raquo;
        </Button>
        <Button
          roundedButton
          outline
          small
          onClick={(e) => {
            showModal(e)
            setThaoTac(FORM_MODE.NEW)
          }}
        >
          +
        </Button>
        <select onChange={(e) => getData(e.target.value)} className="select_paging" href="#">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <ConfimMesage visible={visibleConfim} handleCancel={closeConfim} onOke={() => Okconflim()} />
      <PugupCRUD
        getData={getData}
        dataItem={dataItem}
        thaoTac={thaoTac}
        setData={setData}
        visible={visible}
        hanldCancel={handleCancel}
      />
    </div>
  )
}

export default Homepage
