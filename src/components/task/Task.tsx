import {Draggable} from 'react-beautiful-dnd';
import {TaskI} from '../../store/slices/board/Board.slice.ts';

interface PropsI {
  task: TaskI
  index: number
}
export const Task = (props: PropsI) => {
  const { task, index} = props

  return (
    <Draggable
      key={task.id}
      draggableId={task.id.toString()}
      index={index}
    >
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {task.title}
          </div>
        )
      }}
    </Draggable>
  );
};
