import { ChipSet, Chip } from '@material/react-chips';
import { Subtitle2 } from '@material/react-typography';
import SearchLayout from '../components/layout/SearchLayout';
import '../public/css/search.scss';

export default class SearchPage extends React.Component {
	static Layout = SearchLayout;
	render() {
		return (
			<div className='search-content'>
				<div className='tag-group hairlines shadow-2'>
					<Subtitle2>热门城市</Subtitle2>
					<ChipSet>
						<Chip id='hu_bei' label='湖北' />
						<Chip id='huang_shi' label='黄石' />
						<Chip id='shi_yan' label='十堰' />
						<Chip id='yi_chang' label='宜昌' />
						<Chip id='xiang_fan' label='襄樊' />
						<Chip id='e_zhou' label='鄂州' />
						<Chip id='jin_men' label='荆门' />
						<Chip id='xiao_gan' label='孝感' />
					</ChipSet>
				</div>
			</div>
		);
	}
}
