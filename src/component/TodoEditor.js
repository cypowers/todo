import { useContext, useState, useRef } from "react";
import "./TodoEditor.css";
import { TodoDispatchContext } from "../App";

const TodoEditor = ()=> {

    const {onCreate} = useContext(TodoDispatchContext);
    const [content, setContent] = useState('');
    const inputRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onKeyDown = (e) => {
        if(e.key === 'Enter') {
            onSubmit();
        }
    }
    
    const onSubmit = () => {
        if(!content) {
            console.log('할 일을 입력해주세요.');
            inputRef.current.focus();            
            return;
        }
        onCreate(content); 
        setContent('');
    }

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기</h4>
            <div className="editor_wrapper">
                <input type="text" value={content} ref={inputRef}
                       onChange={onChangeContent} onKeyDown={onKeyDown} placeholder="할 일을 입력하세요." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;