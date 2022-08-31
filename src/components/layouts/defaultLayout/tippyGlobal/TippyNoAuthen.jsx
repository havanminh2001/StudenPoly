import Tippy from '@tippyjs/react'
import React from 'react'
import { Popper as WrapperPopper } from '../../../atoms/popper/Popper'

 
export default function TippyNoAuthen({children}) {
  return (
    <>
       <Tippy
            interactive
            placement='bottom-end'
            render={(attrs) => (
              <div className="more_menu_items" tabIndex="-1" {...attrs}>
                <WrapperPopper>
                  <p className="search_title">Tài aaaa</p>
                </WrapperPopper>
              </div>
            )}
          >
          {children}
          </Tippy>
    </>
  )
}
