import TopAppBar, {
	TopAppBarFixedAdjust,
	TopAppBarIcon,
	TopAppBarRow,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import Head from '../components/head';
import '../public/css/search.scss';
import Router from 'next/router';

export default class SearchPage extends React.Component {
	state = {
		value: '',
	};

	goBack = () => {
		Router.back();
	};

	render() {
		return (
			<div className='search'>
				<Head title='湖北法拍网' />
				<TopAppBar fixed>
					<TopAppBarRow className='row align-center'>
						<TopAppBarIcon navIcon tabIndex={0}>
							<MaterialIcon hasRipple icon='arrow_back' onClick={this.goBack} />
						</TopAppBarIcon>
						<div className='search-input-content'>
							<div className='search-input shadow-2 hairlines'>
								<input
									placeholder='户型/地址'
									value={this.state.value}
									onChange={e =>
										this.setState({ value: e.currentTarget.value })
									}
								/>
								<div className='icon'>
									<MaterialIcon hasRipple icon='search' className='hairlines' />
								</div>
							</div>
						</div>
					</TopAppBarRow>
				</TopAppBar>
				<TopAppBarFixedAdjust>search</TopAppBarFixedAdjust>
			</div>
		);
	}
}
