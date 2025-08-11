import {useContext, useMemo, useState} from "react"
import { TodoStateContext } from "../App";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {


    const {todo} = useContext(TodoStateContext);
    
    const [search, setSearch] = useState('');
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getSearchResult = () => {
        if (!search) return todo;
        return todo.filter(item => item.content.toLowerCase().includes(search.toLowerCase()));
    }

    const analyzeTodo = useMemo(() => {
        const total = todo.length;
        const doneCount = todo.filter(item => item.isDone).length;
        const notDoneCount = total - doneCount;
        return { total, doneCount, notDoneCount };
    }, [todo]);

    const { total, doneCount, notDoneCount } = analyzeTodo;
    return (
        <div className="TodoList">
            <h4>Todo List</h4>
            <div className="todo_analyze">
                <span>총 {total}개</span>
                <span>완료 {doneCount}개</span>
                <span>미완료 {notDoneCount}개</span>
            </div>
            <input value={search}
                   onChange={onChangeSearch}
                   className="searchbar" placeholder="검색어를 입력하세요." />
            <div className="list_wrapper">
                {getSearchResult().map((item) => (
                    <TodoItem key={item.id} {...item} />
                ))}
            </div>            
        </div>
    );
}

TodoList.defaultProps = {
    todo: [],
};

export default TodoList;