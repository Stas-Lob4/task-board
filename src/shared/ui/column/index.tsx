import { Droppable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'

import { AddTask, MoreHoriz } from '@/shared/assets/images'
import { getColumn } from '@/store/slices/board/selectors/board.selectors'

import s from './column.module.scss'

import { Task } from '../task'

interface PropsI {
  columnId: string
}

export const Column = (props: PropsI) => {
  const { columnId } = props
  const column = useSelector(getColumn(columnId))

  const addTaskHandler = () => alert('Add new task!')

  return (
    <Droppable droppableId={columnId} key={columnId}>
      {provided => {
        return (
          <div {...provided.droppableProps} className={s.board_column} ref={provided.innerRef}>
            <div className={s.board_column_head}>
              <div className={s.column_title}>
                <div className={s.column_name}>{column.title}</div>
                <div className={s.column_count_1}>{column.tasks.length}</div>
              </div>
              <div className={s.column_menu}>
                <img alt={'menu_icon'} src={MoreHoriz} />
              </div>
            </div>
            <div className={s.board_column_tasks}>
              {column.tasks.map((task, index) => (
                <Task index={index} key={index} task={task} />
              ))}
              {provided.placeholder}
            </div>
            <div className={s.add_task} onClick={addTaskHandler}>
              <img alt={'add_task'} src={AddTask} />
            </div>
          </div>
        )
      }}
    </Droppable>
  )
}
