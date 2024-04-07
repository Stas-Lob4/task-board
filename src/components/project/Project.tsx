import {useDispatch, useSelector} from 'react-redux';
import {updateSelectProject} from '../../store/slices/project/Project.slice.ts';
import {getProjects, getSelectedProject} from '../../store/slices/project/selectors/project.selector.ts';

export const Project = () => {
  const dispatch = useDispatch()
  const projects = useSelector(getProjects)
  const selectProject = useSelector(getSelectedProject)

  const onClickHandler = (id: string) => dispatch(updateSelectProject({id}))

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      {projects.map((project) => (
        <div style={{
          padding: '10px',
          cursor: 'pointer',
          backgroundColor: selectProject === project.id ? '' : 'lightgrey',
          margin: '10px 0'
        }} key={project.id} onClick={() => onClickHandler(project.id)}>
          {project.title}
        </div>
      ))}
    </div>
  );
};
