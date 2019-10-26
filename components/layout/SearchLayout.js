import TopAppBar, {
	TopAppBarFixedAdjust,
	TopAppBarIcon,
	TopAppBarRow,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import Router from 'next/router';
import Head from '../head';
import './search.scss';

export default class SearchPage extends React.Component {
	state = {
		value: '',
	};

	goBack = () => {
		Router.back();
	};

	render() {
		const { children } = this.props;
		return (
			<div className='search'>
				<Head title='湖北法拍网' />
				<TopAppBar fixed>
					<TopAppBarRow className='row align-center'>
						<TopAppBarIcon navIcon tabIndex={0}>
							<MaterialIcon hasRipple icon='arrow_back' onClick={this.goBack} />
						</TopAppBarIcon>
						<div className='search-input-content hairlines'>
							<div className='search-input'>
								<input
									placeholder='户型/地区'
									value={this.state.value}
									onChange={e =>
										this.setState({ value: e.currentTarget.value })
									}
								/>
								<div className='icon'>
									<MaterialIcon hasRipple icon='search' />
								</div>
							</div>
						</div>
					</TopAppBarRow>
				</TopAppBar>
				<TopAppBarFixedAdjust>{children}</TopAppBarFixedAdjust>
			</div>
		);
	}
}
