import Router from 'next/router';
import TopAppBar, {
	TopAppBarFixedAdjust,
	TopAppBarIcon,
	TopAppBarRow,
	TopAppBarSection,
	TopAppBarTitle,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import List, {
	ListItem,
	ListItemText,
	ListGroup,
	ListGroupSubheader,
	ListDivider,
	ListItemGraphic,
} from '@material/react-list';
import Drawer, {
	DrawerHeader,
	DrawerSubtitle,
	DrawerTitle,
	DrawerContent,
	DrawerAppContent,
} from '@material/react-drawer';
import Head from '../head';
import './MDCLayout.scss';

const pathcase = {
	'/home': {
		activeIndex: 0,
		type: '住宅',
	},
	'/root/villa': {
		activeIndex: 1,
		type: '别墅',
	},
	'/root/shop': {
		activeIndex: 2,
		type: '商铺',
	},
};

export default class MDCLayout extends React.Component {
	state = {
		open: false,
	};

	componentDidMount() {
		this.setState(pathcase[Router.pathname]);
	}

	/**
	 * 切换 Drawer
	 * @param {boolean} [status]
	 */
	drawerHandle = status => {
		this.setState({
			open: status,
		});
	};

	forwardSearch = () => {
		Router.push('/search');
	};

	handleSelect = activeIndex => {
		switch (activeIndex) {
			case 0:
				this.setState(
					{
						type: '住宅',
						activeIndex,
						open: false,
					},
					() => {
						Router.push('/home');
					},
				);
				break;
			case 1:
				this.setState(
					{
						type: '别墅',
						activeIndex,
						open: false,
					},
					() => {
						Router.push('/root/villa');
					},
				);
				break;
			case 2:
				this.setState(
					{
						type: '商铺',
						activeIndex,
						open: false,
					},
					() => {
						Router.push('/root/shop');
					},
				);
				break;
		}
	};

	render() {
		const { children } = this.props;
		const { type } = this.state;
		return (
			<div className='root'>
				<Head title='湖北法拍网' />
				<Drawer
					modal
					open={this.state.open}
					onClose={() => this.drawerHandle(false)}>
					<DrawerHeader>
						<DrawerTitle tag='h2'>湖北法拍网</DrawerTitle>
						<DrawerSubtitle tag='h4'>公开.公平.公正</DrawerSubtitle>
					</DrawerHeader>
					<DrawerContent>
						<ListGroup>
							<ListDivider tag='div' />
							<ListGroupSubheader>类型</ListGroupSubheader>
							<List
								singleSelection
								selectedIndex={this.state.activeIndex}
								handleSelect={activeIndex => this.handleSelect(activeIndex)}>
								<ListItem>
									<ListItemText primaryText='住宅' />
								</ListItem>
								<ListItem>
									<ListItemText primaryText='别墅' />
								</ListItem>
								<ListItem>
									<ListItemText primaryText='商铺' />
								</ListItem>
							</List>
							<ListDivider tag='div' />
							<div className='fill'></div>
							<List className='mb-3'>
								<ListItem>
									<ListItemGraphic graphic={<MaterialIcon icon='gavel' />} />
									<ListItemText primaryText='公司简介' />
								</ListItem>
								<ListItem>
									<ListItemGraphic
										graphic={<MaterialIcon icon='menu_book' />}
									/>
									<ListItemText primaryText='法律知识' />
								</ListItem>
								<ListItem>
									<ListItemGraphic
										graphic={<MaterialIcon icon='linear_scale' />}
									/>
									<ListItemText primaryText='服务流程' />
								</ListItem>
								<ListItem>
									<ListItemGraphic
										graphic={<MaterialIcon icon='phone_callback' />}
									/>
									<ListItemText primaryText='联系我们' />
								</ListItem>
							</List>
						</ListGroup>
					</DrawerContent>
				</Drawer>
				<DrawerAppContent className='drawer-app-content'>
					<TopAppBar fixed>
						<TopAppBarRow>
							<TopAppBarSection align='start'>
								<TopAppBarIcon navIcon tabIndex={0}>
									<MaterialIcon
										aria-label='menu'
										hasRipple
										icon='menu'
										onClick={() => this.drawerHandle(true)}
									/>
								</TopAppBarIcon>
								<TopAppBarTitle>{type}</TopAppBarTitle>
							</TopAppBarSection>
							<TopAppBarSection align='end' role='toolbar'>
								<TopAppBarIcon actionItem tabIndex={1}>
									<MaterialIcon
										aria-label='search'
										hasRipple
										icon='search'
										onClick={this.forwardSearch}
									/>
								</TopAppBarIcon>
							</TopAppBarSection>
						</TopAppBarRow>
					</TopAppBar>
					<TopAppBarFixedAdjust>{children}</TopAppBarFixedAdjust>
				</DrawerAppContent>
			</div>
		);
	}
}
