import React, { useState } from 'react';
import Plus from '../assets/img/plus.svg';
import Delete from '../assets/img/delete.svg';
import Yet from '../assets/img/Yet.svg';
import Done from '../assets/img/Done.svg';

const Main = () => {
    const [content, setContent] = useState('');
    const [todos, setTodos] = useState([{ id: 0, text: 'ex ) 코딩하기', completed: false }]);

    const addTodo = () => {
        if (content.trim() === '') {
            alert('내용을 입력해주세요');
            return;
        }

        setTodos([...todos, { text: content, completed: false }]);
        setContent('');
    };

    const toggleTodo = (index) => {
        const newTodos = todos.map((todo, idx) => {
            if (index === idx) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, idx) => idx !== index);
        setTodos(newTodos);
    };

    return (
        <div id="wrap">
            <header id="header">
                <h1>TO DO LIST</h1>
                <div className="add">
                    <input
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className='content'
                        placeholder="오늘 할 일을 입력해주세요."
                        id="input_todo"
                    />
                    <button id="addbtn" onClick={addTodo}>
                        <img src={Plus} alt="plus button" />
                    </button>
                </div>
            </header>
            <main id="main">
                {todos.map((todo, index) => (
                    <div className="list" key={index}>
                        <div className="box">
                            <div name="checkbox" id={`checkbox${index}`}>
                                <img
                                    src={todo.completed ? Yet : Done}
                                    alt="checkbox"
                                    onClick={() => toggleTodo(index)}
                                />
                            </div>
                            <label htmlFor={`checkbox${index}`}></label>
                            <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                {todo.text}
                            </p>
                        </div>
                        <button id="deletebtn" onClick={() => deleteTodo(index)}>
                            <img src={Delete} alt="delete button" />
                        </button>
                    </div>
                ))}
            </main>
        </div>
    );
};

export default Main;
