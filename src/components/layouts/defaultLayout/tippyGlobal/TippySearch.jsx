import Tippy from '@tippyjs/react'
import React from 'react'
import AcountItem from '../../../atoms/accountItem/AcountItem'
import IconSearch from '../../../atoms/icon_tiktok/IconSearch'
import { Popper as WrapperPopper } from '../../../atoms/popper/Popper'


export default function TippySearch() {
  return (
    <div>
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
    </div>
  )
}
