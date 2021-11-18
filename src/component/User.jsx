import React from "react";
import { Breadcrumb, Card, Row, Col, Input, Button, Space, Table } from 'antd';

const User = () => {
	const { Search } = Input;

	const onSearch = value => console.log(value);

	const columns = [
		{
			title: '멤버아이디',
			dataIndex: 'name',
			key: 'name',
			defaultSortOrder: ['descend'],
			sorter: (a, b) => a.name.length - b.name.length,
		},
		{
			title: '표시이름',
			dataIndex: 'age',
			key: 'age',
			defaultSortOrder: 'descend',
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: '생성날짜',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: '서비스타입',
			key: 'tags',
			dataIndex: 'tags',
		},
		{
			title: '삭제',
			key: 'action',
			render: (text, record) => (
				<Space size="middle">
					<a>Delete</a>
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

	return (
		<>
			<Breadcrumb style={{ margin: '16px 0' }}>
				<Breadcrumb.Item>Menu</Breadcrumb.Item>
				<Breadcrumb.Item>회원관리</Breadcrumb.Item>
			</Breadcrumb>
			
			<Row gutter={16} >
				<Col span={8}>
					<Card title="누적 가입자수" bordered={false}>
						Card content
					</Card>
				</Col>
				<Col span={8}>
					<Card title="오늘의 가입자수" bordered={false}>
						Card content
					</Card>
				</Col>
			</Row>

			<Card title="검색 및 생성하기" bordered={false} 
      style={{ marginTop: '1em' }}>
				<Row gutter={[16, 16]}>
					<Col span={12}>
						<Search
							placeholder="회원아이디를 넣어 검색하세요."
							allowClear
							enterButton="조회하기"
							size="large"
							onSearch={onSearch}
						/>
					</Col>
					<Col span={24}>
						<Space>
							<Button type="primary" size={{size: 'large'}}>생성하기</Button>
							<Button type="" size={{size: 'large'}}>새로고침</Button>
						</Space>
					</Col>
				</Row>
				<Row>
				</Row>
			</Card>

			<Card title="회원 목록" bordered={false} 
      style={{ marginTop: '1em' }} >
				<Table columns={columns} dataSource={data} />
			</Card>
		</>
	)
}

export default User;