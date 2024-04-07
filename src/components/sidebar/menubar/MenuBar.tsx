import { ReactNode } from 'react'
import ExpendLessImage from '../../assets/images/sidebar/expand_less.svg'
import s from './MenuBar.module.scss'
import { ItemMenu } from './item-menu/ItemMenu'


interface ItemMenuI {
	image: string
	name: string
	onClick: () => void
}

interface PropsI {
	name: string
	listMenu: ItemMenuI[]
	children?: ReactNode
}

export const MenuBar = (props: PropsI) => {
	const { name, listMenu, children } = props

	return (
		<div className={s.menu}>
			<div className={s.menu_head}>
				<div className={s.menu_head_title}>{name}</div>
				<div className={s.button_expand}>
					<img src={ExpendLessImage} alt="expand" />
				</div>
			</div>
			<div className={s.menu_items}>
				{listMenu.map((item, index) => (
					<ItemMenu
						name={item.name}
						image={item.image}
						onClick={item.onClick}
						key={index}
					/>
				))}
				{children}
			</div>
		</div>
	)
}