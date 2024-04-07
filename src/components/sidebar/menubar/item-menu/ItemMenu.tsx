import s from './ItemMenu.module.scss'
import clsx from 'clsx'

interface PropsI {
	active?: boolean
	image: string
	name: string
	onClick?: () => void
}

export const ItemMenu = ({ name, image, onClick, active }: PropsI) => {
	return (
		<div className={s.menu_item} onClick={onClick}>
			<div className={s.item_image}>
				<img src={image} alt="item" />
			</div>
			<div className={clsx(s.item_name, active && s.active)}>{name}</div>
		</div>
	)
}