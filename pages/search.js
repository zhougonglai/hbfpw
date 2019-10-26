import List, {
	ListItem,
	ListItemText,
	ListGroup,
	ListGroupSubheader,
	ListDivider,
} from '@material/react-list';
import SearchLayout from '../components/layout/SearchLayout';
import '../public/css/search.scss';

export default class SearchPage extends React.Component {
	static Layout = SearchLayout;
	render() {
		return (
			<div className='search-content'>
				<ListGroup>
					<ListGroupSubheader tag='h2'>Folders</ListGroupSubheader>
					<List>
						<ListItem>
							<ListItemText primaryText='Photos' />
						</ListItem>
					</List>
					<ListDivider tag='div' />
					<ListGroupSubheader tag='h2'>Recent Files</ListGroupSubheader>
					<List>
						<ListItem>
							<ListItemText primaryText='Vacation' />
						</ListItem>
					</List>
				</ListGroup>
			</div>
		);
	}
}
