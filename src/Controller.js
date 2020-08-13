import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Input, Label, Modal, ModalHeader, ModalBody, Button, ModalFooter} from "reactstrap";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
;

function Controller(props) {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newPriority, setNewPriority] = useState(0)
    const [newStatus, setNewStatus] = useState('')

    const addButtonHandler = () =>{
        props.addNewTask(newTitle, newPriority, newStatus)
        setIsModalOpen(false)
        setNewTitle('')
    }

    return (
        <>
            <Button onClick={() => setIsModalOpen(true)}>Add new task</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader>Add new title</ModalHeader>
                <ModalBody>
                    <Label>New title</Label>
                    <Input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)}/>
                    <Row>
                        <Col>
                            <Label>Priority</Label>
                            <Input type="select" value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                                <option value={0}>Low</option>
                                <option value={1}>Med</option>
                                <option value={2}>High</option>
                            </Input>
                        </Col>
                        <Col>
                            <Label>Status</Label>
                            <Input type="select" value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                                <option value={'todo'}>To do</option>
                                <option value={'progress'}>Progress</option>
                                <option value={'review'}>Review</option>
                                <option value={'done'}>Done</option>
                            </Input>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={addButtonHandler}>Add new task</Button>
                    {' '}
                    <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default Controller;
