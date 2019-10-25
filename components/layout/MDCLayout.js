import { useState, useEffect } from 'react';
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
	ListItemMeta,
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

export default ({ children }) => {
	const [open, drawerHandle] = useState(false);
	const [activeIndex, handleSelect] = useState(0);

	return (
		<div className='root'>
			<Head title='湖北法拍网' />
			<Drawer modal open={open} onClose={drawerHandle}>
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
							selectedIndex={activeIndex}
							handleSelect={handleSelect}>
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
								<ListItemGraphic graphic={<MaterialIcon icon='menu_book' />} />
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
								<MaterialIcon hasRipple icon='menu' onClick={drawerHandle} />
							</TopAppBarIcon>
							<TopAppBarTitle>住宅</TopAppBarTitle>
						</TopAppBarSection>
						<TopAppBarSection align='end' role='toolbar'>
							<TopAppBarIcon actionItem tabIndex={1}>
								<MaterialIcon aria-label='search' hasRipple icon='search' />
							</TopAppBarIcon>
						</TopAppBarSection>
					</TopAppBarRow>
				</TopAppBar>
				<TopAppBarFixedAdjust>{children}</TopAppBarFixedAdjust>
			</DrawerAppContent>
		</div>
	);
};
