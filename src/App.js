import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
import { useReducer, useRef } from 'react';

const mockTodo = [
  { id: 0, isDone: false, content: 'React 공부하기', createDate: new Date().getTime() },
  { id: 1, isDone: false, content: '빨래 널기', createDate: new Date().getTime() },
  { id: 2, isDone: false, content: '노래 연습', createDate: new Date().getTime() },
  
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.newItem, ...state];
    case 'UPDATE':
      return state.map(item => 
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case 'DELETE':
      return state.filter(item => item.id !== action.targetId);
    default:
      return state;
  }
  
}

function App() {
  // const [todo, setTodo] = useState(mockTodo);
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({ type: 'CREATE',
               newItem: {
                  id: idRef.current,
                  isDone: false,
                  content: content,
                  createDate: new Date().getTime()
               }
     });
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId
    });
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  );
}

export default App;
