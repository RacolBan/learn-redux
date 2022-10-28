import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { addTodo } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { todoRemain } from '../redux/selectors';
export default function TodoList() {
  const todolist = useSelector(todoRemain) || [];
  const dispatch = useDispatch();
  const id = nanoid();
  const [todo, setTodo] = useState('');
  const [priority, setPriority] = useState('Medium');
  const handleAddButton = () => {
    dispatch(addTodo({
      id, name: todo, priority: priority, isCompleted: false
    }));

    setTodo('');
    setPriority('Medium');
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todolist.map(todo => {
          return (
            <Todo key={todo.id} id={todo.id} name={todo.name} priority={todo.priority} isCompleted={todo.isCompleted} />
          )
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todo} onChange={e => setTodo(e.target.value)} />
          <Select defaultValue="Medium" value={priority} onChange={value => setPriority(value)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButton}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
