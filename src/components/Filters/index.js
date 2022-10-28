import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterStatusTodo, searchTodo, priorityFilterTodo } from '../redux/actions';
const { Search } = Input;

export default function Filters() {
  const dispatch = useDispatch();
  const [inputFilter, setInputFilter] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState([]);
  const handleSearch = e => {
    setInputFilter(e.target.value);
    dispatch(searchTodo(e.target.value))
  }

  const handleOnChangeStatus = (e) => {
    setFilterStatus(e.target.value);
    dispatch(filterStatusTodo(e.target.value))
  }
  const handleChangeSelectPri = (value) => {
    setFilterPriority(value);
    dispatch(priorityFilterTodo(value));
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={inputFilter} onChange={e => handleSearch(e)} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group onChange={handleOnChangeStatus} value={filterStatus} >
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>Todo</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          onChange={handleChangeSelectPri}
          value={filterPriority}
        >
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
      </Col>
    </Row>
  );
}
