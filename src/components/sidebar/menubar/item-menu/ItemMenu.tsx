import s from './ItemMenu.module.scss'

interface PropsI {
	image: string
	name: string
	onClick?: () => void
}

export const ItemMenu = ({ name, image, onClick }: PropsI) => {
	return (
		<div className={s.menu_item} onClick={onClick}>
			<div className={s.item_image}>
				<img src={image} alt="item" />
			</div>
			<div className={s.item_name}>{name}</div>
		</div>
	)
}