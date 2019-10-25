import { Grid, Row, Cell } from '@material/react-layout-grid';
import Card, { CardPrimaryContent, CardMedia } from '@material/react-card';
import { Body1, Caption } from '@material/react-typography';
import MDCLayout from '../components/layout/MDCLayout';
import BouncingLoader from '../components/bouncing-loader';
import '../public/css/home.scss';

export default class Root extends React.Component {
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
			<div className='root-content'>
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

											<div className='card-content'>
												<Body1 className='desc mt-1 mx-1 bold'>
													{item.title}
												</Body1>
												<div className='fill' />
												<div className='actions'>
													<Caption className='price'>
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
													</Caption>
													<div className='fill' />
													<Caption className='square text-gray'>
														{item.square}㎡
													</Caption>
												</div>
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
