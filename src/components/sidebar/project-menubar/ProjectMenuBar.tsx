import { MenuBar } from '../menubar/MenuBar'
import AddCircleImage from '../../assets/images/sidebar/add_circle.svg'
import TagImage from '../../assets/images/sidebar/tag.svg'

import { ItemMenu } from '../menubar/item-menu/ItemMenu'
import { useSelector } from 'react-redux'
import { getProjects } from '../../../store/slices/project/selectors/project.selector'


export const ProjectMenuBar = () => {
	const projects = useSelector(getProjects)

	const listMenu = projects.map((p) => ({
		image: TagImage,
		name: p.title,
		onClick: () => console.log(`Project info ${p.title} id ${p.id}`)
	}))

	return (
		<MenuBar name="Projects" listMenu={listMenu}>
			<ItemMenu image={AddCircleImage} name="Add new Project" />
		</MenuBar>
	)
}