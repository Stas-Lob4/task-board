import { ReactNode } from 'react'

import { ExpandLess } from '@/shared/assets/images'

import s from './menu-bar.module.scss'

import { ItemMenu } from './item-menu'

interface ItemMenuI {
  image: string
  key: string
  name: string
  onClick: () => void
}

interface PropsI {
  activeMenuKey?: null | string
  children?: ReactNode
  listMenu: ItemMenuI[]
  name: string
}

export const MenuBar = (props: PropsI) => {
  const { activeMenuKey, children, listMenu, name } = props

  return (
    <div className={s.menu}>
      <div className={s.menu_head}>
        <div className={s.menu_head_title}>{name}</div>
        <div className={s.button_expand}>
          <img alt={'expand'} src={ExpandLess} />
        </div>
      </div>
      <div className={s.menu_items}>
        {listMenu.map(item => (
          <ItemMenu
            active={activeMenuKey === item.key}
            image={item.image}
            key={item.key}
            name={item.name}
            onClick={item.onClick}
          />
        ))}
        {children}
      </div>
    </div>
  )
}
