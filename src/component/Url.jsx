import React from "react";
import { Breadcrumb, Card, Row, Col, Input, Button, Space, Table, Tag } from 'antd';

const Url = () => {
	const { Search } = Input;

	const onSearch = value => console.log(value);

	const columns = [
		{
			title: '방이름',
			dataIndex: 'name',
			key: 'name',
			render: text => <a>{text}</a>,
		},
		{
			title: '잠금여부',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: '녹화옵션',
			dataIndex: 'address',
			key: 'address',
		},
		{
			title: '만든날짜',
			key: 'tags',
			dataIndex: 'tags',
		},
		{
			title: '회원아이디',
			key: 'tags',
			dataIndex: 'tags',
		},
		{
			title: '수정',
			key: 'action',
			render: (text, record) => (
				<Space size="middle">
					<a>edit</a>
				</Space>
			),
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
		{
			title: '호스트URL',
			key: 'action',
			render: (text, record) => (
				<Space size="middle">
					<a>copy</a>
				</Space>
			),
		},
		{
			title: '게스트URL',
			key: 'action',
			render: (text, record) => (
				<Space size="middle">
					<a>copy</a>
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
				<Breadcrumb.Item>화상방관리</Breadcrumb.Item>
			</Breadcrumb>

			<Card title="검색 및 생성하기" bordered={false} 
      style={{ marginTop: '1em' }}>
				<Row gutter={[16, 16]}>
					<Col span={12}>
						<Space>
							<Search
								placeholder="회원아이디를 넣어 검색하세요."
								allowClear
								enterButton="조회하기"
								size=""
								onSearch={onSearch}
							/>
							<Search
								placeholder="방이름을 넣어 검색하세요."
								allowClear
								enterButton="조회하기"
								size=""
								onSearch={onSearch}
							/>
						</Space>
					</Col>
					<Col span={24}>
						<Space>
							<Button type="primary" size={{size: 'large'}}>생성하기</Button>
							<Button type="" size={{size: 'large'}}>새로고침</Button>
						</Space>
					</Col>
				</Row>
			</Card>

			<Card title="화상방 목록" bordered={false} 
      style={{ marginTop: '1em' }} >
				<Table columns={columns} dataSource={data} />
			</Card>
		</>
	)
}

export default Url;