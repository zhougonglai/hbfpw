import Card, {
	CardPrimaryContent,
	CardMedia,
	CardActions,
	CardActionButtons,
	CardActionIcons,
} from '@material/react-card';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import { Headline6 } from '@material/react-typography';
import HomeLayout from '../components/layout/home';
import BouncingLoader from '../components/bouncing-loader';

export default class Index extends React.Component {
	static Layout = HomeLayout;
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
							{this.state.list.map(item => (
								<Cell phoneColumns={2} tabletColumns={4} desktopColumns={6}>
									<Card>
										<CardPrimaryContent>
											<CardMedia wide imageUrl={item.img} />

											<div className='ma-1 larger bold'>{item.title}</div>
											<div className='actions ma-1'>
												<div className='price text-danger'>¥{item.price}</div>
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
