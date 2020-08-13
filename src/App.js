import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Row, Container} from "reactstrap";
import Column from "./Column";
import Controller from "./Controller";


function App() {

    const taskList = [
        {id: Math.random(), name: 'First', priority: 0, status: 'todo'},
        {id: Math.random(), name: 'Second', priority: 1, status: 'todo'},
        {id: Math.random(), name: 'Third', priority: 2, status: 'todo'},
        {id: Math.random(), name: 'Fourth', priority: 1, status: 'todo'}

    ]

    const columnList = [
        {id: Math.random(), title: 'To do', status: 'todo'},
        {id: Math.random(), title: 'In progress', status: 'progress'},
        {id: Math.random(), title: 'Review', status: 'review'},
        {id: Math.random(), title: 'Done!', status: 'done'}]

    const statuses = ['todo', 'progress', 'review', 'done']
    const taskPriority = [0,1,2]

    const [tasks, setTasks] = useState(taskList)

    const changeTaskStatus = (taskId, direction) => {
        const newTasks = tasks.map(el => {
            if (el.id === taskId) {
                if (direction === 'right') el.status = statuses[statuses.indexOf(el.status) + 1]
                if (direction === 'left') el.status = statuses[statuses.indexOf(el.status) - 1]
                if (direction === 'up') el.priority = taskPriority[taskPriority.indexOf(el.priority) + 1]
                if (direction === 'down') el.priority = taskPriority[taskPriority.indexOf(el.priority) - 1]
            }
            return el;
        })
        setTasks(newTasks)
    }

    const addNewTask = (newTitle, newPriority, newStatus) => {
        const newTask = {
            id: Math.random(),
            name: newTitle,
            priority: newPriority,
            status: newStatus
        }
        const newTasks = [...tasks, newTask]
        setTasks(newTasks)
    }
    const deleteTask = (taskId) => {
        const newTasks = tasks.filter(el => el.id !== taskId)
        setTasks(newTasks)
    }

    return (
        <div>
            <Container>
                <Row>
                    <Controller addNewTask={addNewTask}/>
                    {columnList.map(el => <Column
                        changeTaskStatus={changeTaskStatus}
                        column={el}
                        tasks={tasks}
                        deleteTask={deleteTask}
                    />)}
                    {/*<Column changeTaskStatus={changeTaskStatus} title={'todo'} tasks={tasks}/>*/}
                    {/*<Column changeTaskStatus={changeTaskStatus} title={'progress'} tasks={tasks}/>*/}
                    {/*<Column changeTaskStatus={changeTaskStatus} title={'review'} tasks={tasks}/>*/}
                    {/*<Column changeTaskStatus={changeTaskStatus} title={'done'} tasks={tasks}/>*/}
                </Row>
            </Container>

        </div>
    );
}

export default App;
