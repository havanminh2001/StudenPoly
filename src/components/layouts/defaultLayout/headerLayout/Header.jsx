import React from 'react'
import IconLogo from '../../../atoms/icon_tiktok/IconLogo'
import IconSearch from '../../../atoms/icon_tiktok/IconSearch'
import Tippy from '@tippyjs/react/headless'
import { Popper as WrapperPopper } from '../../../atoms/popper/Popper'
import AcountItem from '../../../atoms/accountItem/AcountItem'
import Button from '../../../atoms/button/Button'

function Header() {
  return (
    <header className="Header_conten">
      <div className="inner_header">
        <div className="logo_header">
          <IconLogo />
        </div>
        <Tippy
          interactive
          render={(attrs) => (
            <div className="search_result" tabIndex="-1" {...attrs}>
              <WrapperPopper>
                <p className="search_title">Tài khoản</p>
                <AcountItem />
                <AcountItem />
                <AcountItem />
              </WrapperPopper>
            </div>
          )}
        >
          <div className="search_header">
            <input spellCheck={false} placeholder="Tìm kiếm tài khoản và video" />

            <button className="search_button">
              <IconSearch />
            </button>
          </div>
        </Tippy>
        <div className="action_header">
          <Button className='primary'>Login</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
