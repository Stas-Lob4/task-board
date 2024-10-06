import { useDispatch, useSelector } from 'react-redux'

import { AddCircle, Tag } from '@/shared/assets/images'
import { updateSelectProject } from '@/store/slices/project/project.slice'
import { getProjects, getSelectedProject } from '@/store/slices/project/selectors/project.selector'

import { MenuBar } from '../menubar'
import { ItemMenu } from '../menubar/item-menu'

export const ProjectMenuBar = () => {
  const projects = useSelector(getProjects)
  const selectedProject = useSelector(getSelectedProject)

  const dispatch = useDispatch()
  const selectProjectHandler = (id: string) => {
    dispatch(
      updateSelectProject({
        id,
      })
    )
  }
  const addProjectHandler = () => alert('Add new Project!')

  const listMenu = projects.map(p => ({
    image: Tag,
    key: p.id,
    name: p.title,
    onClick: () => selectProjectHandler(p.id),
  }))

  return (
    <MenuBar activeMenuKey={selectedProject} listMenu={listMenu} name={'Projects'}>
      <ItemMenu image={AddCircle} name={'Add new Project'} onClick={addProjectHandler} />
    </MenuBar>
  )
}
