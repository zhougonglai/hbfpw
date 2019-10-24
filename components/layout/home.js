import { useState, useEffect } from 'react';
import Router from 'next/router';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import MaterialIcon from '@material/react-material-icon';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Head from '../head';
import '../../public/css/index.scss';

export default ({ children }) => {
	const [activeIndex, handleActiveIndexUpdate] = useState(0);

	useEffect(() => {
		switch (activeIndex) {
			case 0:
				Router.push('/');
				break;
			case 1:
				Router.push('/villa');
				break;
			case 2:
				Router.push('/shop');
				break;
		}
	}, [activeIndex]);

	return (
		<div className='home'>
			<Head title='首页' />
			<Grid className='grid'>
				<Row className='justify-items-center text-center'>
					<Cell
						phoneColumns={1}
						tabletColumns={2}
						desktopColumns={3}
						align='middle'>
						<MaterialIcon icon='gavel' className=' text-danger' />
						<div>公司简介</div>
					</Cell>
					<Cell
						phoneColumns={1}
						tabletColumns={2}
						desktopColumns={3}
						align='middle'>
						<MaterialIcon icon='menu_book' className='text-danger' />
						<div>法拍知识</div>
					</Cell>
					<Cell
						phoneColumns={1}
						tabletColumns={2}
						desktopColumns={3}
						align='middle'>
						<MaterialIcon icon='linear_scale' className='text-danger' />
						<div>服务章程</div>
					</Cell>
					<Cell
						phoneColumns={1}
						tabletColumns={2}
						desktopColumns={3}
						align='middle'>
						<MaterialIcon icon='phone_callback' className='text-danger' />
						<div>联系我们</div>
					</Cell>
				</Row>
			</Grid>

			<div className='toolbar border-bottom-1px border-top-1px'>
				<TabBar
					activeIndex={activeIndex}
					indexInView={activeIndex}
					handleActiveIndexUpdate={handleActiveIndexUpdate}
					className='col-3'>
					<Tab>
						<span className='mdc-tab__text-label'>住宅</span>
					</Tab>
					<Tab>
						<span className='mdc-tab__text-label'>别墅</span>
					</Tab>
					<Tab>
						<span className='mdc-tab__text-label'>商铺</span>
					</Tab>
				</TabBar>
				<div className='col-1 tool-item'>更多></div>
			</div>
			{children}
		</div>
	);
};
