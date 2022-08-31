import React from 'react'
import IconLogo from '../../../atoms/icon_tiktok/IconLogo'
import IconSearch from '../../../atoms/icon_tiktok/IconSearch'
import Tippy from '@tippyjs/react/headless'
import { Popper as WrapperPopper } from '../../../atoms/popper/Popper'
import AcountItem from '../../../atoms/accountItem/AcountItem'
import Button from '../../../atoms/button/Button'
import TippyNoAuthen from '../tippyGlobal/TippyNoAuthen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import AcountItem2 from '../../../atoms/accountItem/AcountItem2'

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
                <AcountItem2 />
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
          <Button text>+ Upload</Button>
          <Button primary onClick={() => alert('Chưa phát triển đâu má')}>
            Login
          </Button>
          <button className="more_option_header">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
          {/* <TippyNoAuthen>
          
          </TippyNoAuthen> */}
        </div>
      </div>
    </header>
  )
}

export default Header
