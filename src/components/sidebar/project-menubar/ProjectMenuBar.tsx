import { MenuBar } from '../menubar/MenuBar'
import AddCircleImage from '../../assets/images/sidebar/add_circle.svg'
import TagImage from '../../assets/images/sidebar/tag.svg'

import { ItemMenu } from '../menubar/item-menu/ItemMenu'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects, getSelectedProject } from '../../../store/slices/project/selectors/project.selector'
import { updateSelectProject } from '../../../store/slices/project/Project.slice.ts'


export const ProjectMenuBar = () => {
	const projects = useSelector(getProjects)
	const selectedProject = useSelector(getSelectedProject)

	const dispatch = useDispatch()
	const selectProjectHandler = (id: string) => {
		dispatch(updateSelectProject({
			id
		}))
	}
	const addProjectHandler = () => alert('Add new Project!')

	const listMenu = projects.map((p) => ({
		key: p.id,
		image: TagImage,
		name: p.title,
		onClick: () => selectProjectHandler(p.id)
	}))

	return (
		<MenuBar
			name="Projects"
			listMenu={listMenu}
			activeMenuKey={selectedProject}
		>
			<ItemMenu image={AddCircleImage} name="Add new Project" onClick={addProjectHandler} />
		</MenuBar>
	)
}