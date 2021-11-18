import React, { useState } from "react";
import { Breadcrumb, Card, Row, Col, Input, Button, Space, Table, Radio, Form, DatePicker } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

const List = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('vertical');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

	const onSearch = () => console.log('search');

	const columns = [
		{
			title: '호스트',
			dataIndex: 'name',
			key: 'name',
			defaultSortOrder: ['descend'],
			sorter: (a, b) => a.name.length - b.name.length,
		},
		{
			title: '방이름',
			dataIndex: 'age',
			key: 'age',
			defaultSortOrder: 'descend',
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: '상태',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: '총참여자',
			key: 'tags',
			dataIndex: 'tags',
		},
		{
			title: '참여자ID',
			key: 'participants_id',
			dataIndex: 'participantsID',
		},
		{
			title: '시작시간',
			key: 'start_time',
			dataIndex: 'start_time',
		},
		{
			title: '종료시간',
			key: 'end_time',
			dataIndex: 'end_time',
		},
		{
			title: '진행시간',
			key: 'progress_time',
			dataIndex: 'progress_time',
		},
		{
			title: '녹화시간',
			key: 'rec_time',
			dataIndex: 'rec_time',
		},
		{
			title: '녹화파일',
			key: 'action',
			render: (text, record) => (
				<Space size="middle">
					<a>play</a>
				</Space>
			),
		},
		{
			title: '다운',
			key: 'action',
			render: (text, record) => (
				<Space size="middle">
					<a>download</a>
				</Space>
			),
		},
	];
	
	const data = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
			tags: ['nice', 'developer'],
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
			tags: ['loser'],
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park',
			tags: ['cool', 'teacher'],
		},
	];

	const rangeConfig = {
		rules: [
			{
				type: 'array',
				required: false,
				message: 'Please select time!',
			},
		],
	};

  const [ recfileVal, setRecfileVal ] = useState('all');
  const [ partyVal, setPartyVal ] = useState('all');

	return (
		<>
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Menu</Breadcrumb.Item>
				<Breadcrumb.Item>화상내역</Breadcrumb.Item>
			</Breadcrumb>
			
			<Row gutter={16} >
				<Col span={6}>
					<Card title="화상시간" bordered={false}>
						Card content
					</Card>
				</Col>
				<Col span={6}>
					<Card title="화상횟수(1인)" bordered={false}>
						Card content
					</Card>
				</Col>
				<Col span={6}>
					<Card title="11월 최번시" bordered={false}>
						Card content
					</Card>
				</Col>
				<Col span={6}>
					<Card title="검색일 최번시" bordered={false}>
						Card content
					</Card>
				</Col>
			</Row>

			<Card title="검색 및 생성하기" bordered={false} 
      style={{ marginTop: '1em' }}>
				<Form
					layout='vertical'
					wrapperCol={{
						span: 12,
					}}
					form={form}
					initialValues={{recfile:"all", party:"all"}}
					size={'small'}
				>
					<Form.Item label="회원아이디">
						<Input placeholder="회원아이디를 넣어 검색하세요." prefix={<UserOutlined />} />
					</Form.Item>
					<Form.Item label="녹화파일" name="recfile">
						<Radio.Group 
							value={recfileVal}
							buttonStyle="solid">
							<Radio.Button value={"all"}>전체</Radio.Button>
							<Radio.Button value={"yes"}>있음</Radio.Button>
							<Radio.Button value={"none"}>없음</Radio.Button>
						</Radio.Group>
					</Form.Item>
					<Form.Item label="참여인원" name="party">
						<Radio.Group 
							value={partyVal}
							buttonStyle="solid">
							<Radio.Button value={"all"}>전체</Radio.Button>
							<Radio.Button value={"1"}>1명</Radio.Button>
							<Radio.Button value={"2"}>2명</Radio.Button>
							<Radio.Button value={"3"}>3명</Radio.Button>
							<Radio.Button value={"4"}>4명</Radio.Button>
						</Radio.Group>
					</Form.Item>
					<Form.Item name="range-picker" label="시작날짜" {...rangeConfig}>
						<RangePicker />
					</Form.Item>
					<Form.Item>
						<Space>
							<Button type="primary" size={{size: 'large'}} onClick={onSearch}>조회하기</Button>
							<Button type="primary" size={{size: 'large'}}>생성하기</Button>
							<Button type="" size={{size: 'large'}}>새로고침</Button>
						</Space>
					</Form.Item>
				</Form>
			</Card>

			<Card title="화상 내역" bordered={false} 
      style={{ marginTop: '1em' }} >
				<Table columns={columns} dataSource={data} />
			</Card>
		</>
	)
}

export default List;