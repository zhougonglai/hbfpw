import Card, { CardPrimaryContent, CardMedia } from '@material/react-card';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import MDCLayout from '../../components/layout/MDCLayout';
import BouncingLoader from '../../components/bouncing-loader';
import '../../public/css/index.list.scss';

export default class Villa extends React.Component {
	static Layout = MDCLayout;
	state = {
		list: [],
	};

	async componentDidMount() {
		const { data } = await fetch('/api/list').then(res => res.json());
		this.setState({ list: data });
	}

	render() {
		return (
			<div className='lists'>
				{this.state.list.length ? (
					<Grid>
						<Row>
							{this.state.list.map((item, key) => (
								<Cell
									phoneColumns={2}
									tabletColumns={4}
									desktopColumns={3}
									key={key}>
									<Card className='card hairlines'>
										<CardPrimaryContent>
											<CardMedia wide imageUrl={item.img} />

											<div className='mt-1 mx-1 bold'>{item.title}</div>
											<div className='actions ma-1'>
												<div className='price'>
													<span className='prefix text-danger'>¥</span>
													<span className='larger bold text-danger'>
														{item.price}
													</span>
													<span className='subfix text-danger'>万</span>
													<small
														className='text-gray'
														style={{ marginLeft: '4px' }}>
														起拍
													</small>
												</div>
												<div className='fill' />
												<div className='square text-gray'>{item.square}㎡</div>
											</div>
										</CardPrimaryContent>
									</Card>
								</Cell>
							))}
						</Row>
					</Grid>
				) : (
					<BouncingLoader />
				)}
			</div>
		);
	}
}
