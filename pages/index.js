import { Cell, Grid, Row } from '@material/react-layout-grid';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import MaterialIcon from '@material/react-material-icon';
import Head from '../components/head';
import '../public/css/index.scss';

export default class Home extends React.Component {
	state = {
		activeIndex: 0,
	};

	handleActiveIndexUpdate = activeIndex => this.setState({ activeIndex });

	render() {
		return (
			<div className='home'>
				<Head title='首页' />
				<Grid className='grid'>
					<Row className='justify-items-center text-center border-bottom-1px'>
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
				<TabBar
					activeIndex={this.state.activeIndex}
					handleActiveIndexUpdate={this.handleActiveIndexUpdate}>
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
			</div>
		);
	}
}
