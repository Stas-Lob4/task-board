import clsx from 'clsx'

import s from './item-menu.module.scss'

interface PropsI {
  active?: boolean
  image: string
  name: string
  onClick?: () => void
}

export const ItemMenu = ({ active, image, name, onClick }: PropsI) => {
  return (
    <div className={s.menu_item} onClick={onClick}>
      <div className={s.item_image}>
        <img alt={'item'} src={image} />
      </div>
      <div className={clsx(s.item_name, active && s.active)}>{name}</div>
    </div>
  )
}
