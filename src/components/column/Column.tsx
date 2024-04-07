import {useSelector} from 'react-redux';
import {Droppable} from 'react-beautiful-dnd';
import {Task} from '../task/Task.tsx';
import {getColumn} from '../../store/slices/board/selectors/board.selector.ts';

interface PropsI {
  columnId: string
}

export const Column = (props: PropsI) => {
  const {columnId} = props
  const column = useSelector(getColumn(columnId))

  return (
    <div>
      <Droppable droppableId={columnId} key={columnId}>
        {(provided) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <h3>{column.title}</h3>
              {column.tasks.map((task, index) => (<Task task={task} index={index}/>))}
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
    </div>
  );
};
