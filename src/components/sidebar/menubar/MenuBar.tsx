import { ReactNode } from 'react'
import ExpendLessImage from '../../assets/images/sidebar/expand_less.svg'
import s from './MenuBar.module.scss'
import { ItemMenu } from './item-menu/ItemMenu'


interface ItemMenuI {
	key: string
	image: string
	name: string
	onClick: () => void
}

interface PropsI {
	name: string
	listMenu: ItemMenuI[]
	activeMenuKey?: string | null
	children?: ReactNode
}

export const MenuBar = (props: PropsI) => {
	const { name, listMenu, children, activeMenuKey } = props

	return (
		<div className={s.menu}>
			<div className={s.menu_head}>
				<div className={s.menu_head_title}>{name}</div>
				<div className={s.button_expand}>
					<img src={ExpendLessImage} alt="expand" />
				</div>
			</div>
			<div className={s.menu_items}>
				{listMenu.map((item) => (
					<ItemMenu
						name={item.name}
						image={item.image}
						onClick={item.onClick}
						key={item.key}
						active={activeMenuKey === item.key}
					/>
				))}
				{children}
			</div>
		</div>
	)
}