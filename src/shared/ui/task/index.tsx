import { Draggable } from 'react-beautiful-dnd'

import { Avatar } from '@/shared/assets/images'
import { TaskI } from '@/store/slices/board/board.slice'

import s from './task.module.scss'

interface PropsI {
  index: number
  task: TaskI
}

export const Task = (props: PropsI) => {
  const { index, task } = props

  return (
    <Draggable draggableId={task.id.toString()} index={index} key={task.id}>
      {provided => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={s.task}
          >
            <div className={s.header_task}>
              <div className={s.title_task}>{task.title}</div>
            </div>
            <div className={s.tags_task}>
              <div className={s.task_tag_1}>#001</div>
              <div className={s.task_tag_2}>Design</div>
              <div className={s.task_tag_3}>backlog</div>
            </div>
            <div className={s.assignment_user}>
              <img alt={'avatar'} src={Avatar} />
            </div>
          </div>
        )
      }}
    </Draggable>
  )
}
