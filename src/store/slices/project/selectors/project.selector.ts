import {RootState} from '../../../index.ts';

export const getProjects = (state: RootState) => state.project.projects
export const getSelectedProject = (state: RootState) => state.project.selectProject