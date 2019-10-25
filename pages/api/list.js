export default (req, res) => {
	const arr1 = {
		img: 'https://hbfpw.net/uploads/190729/2-1ZH9211925a4.jpg',
		title: '武汉市洪山村城中村改造开发用地K11地块11栋2单',
		price: 183.33,
		square: 117.18,
	};

	const arr2 = {
		img: 'https://hbfpw.net/uploads/191001/2-191001000IaK.png',
		title: '新鑫佳苑小区7栋3单元6层2号房地产',
		price: 196.641,
		square: 134.62,
	};

	const arr3 = {
		img: 'https://hbfpw.net/uploads/191023/2-191023234S9252.jpg',
		title: '金地·格林小城C地块梦茵三区C栋C1单元11层03室房',
		price: 207.098,
		square: 127.36,
	};

	const arr4 = {
		img: 'https://hbfpw.net/uploads/191023/2-1910230236122E.jpg',
		title: '常青花园3区42栋3单元6层2室房屋',
		price: 112.029,
		square: 80,
	};

	const arr5 = {
		img: 'https://hbfpw.net/uploads/191018/2-19101R33004319.jpg',
		title: '乐花园7栋4单元1层02室的房产',
		price: 161.728,
		square: 110.83,
	};

	const arr6 = {
		img: 'https://hbfpw.net/uploads/191023/2-1910230AG12X.jpg',
		title: '邾城街刘集村1-3层房地产',
		price: 38.232,
		square: 58.5,
	};

	const arr7 = {
		img: 'https://hbfpw.net/uploads/191021/2-1910212042221A.jpg',
		title: '东湖新技术开发区武黄公路189号华乐花园7栋4单元',
		price: 161.729,
		square: 110.83,
	};

	const arr8 = {
		img: 'https://hbfpw.net/uploads/191016/2-191016223530222.jpg',
		title: '中央文化旅游区一期K9-1地块5栋3单元37层2号房产',
		price: 1165.32,
		square: 110.83,
	};

	const arr9 = {
		img: 'https://hbfpw.net/uploads/191025/2-191025064RbL.jpg',
		title: '松涛苑D区6栋604室房地产',
		price: 171.628,
		square: 110.83,
	};

	const arr0 = {
		img: 'https://hbfpw.net/uploads/191023/2-191023013920b4.jpg',
		title: '单洞路18号（聚银大厦）16层11室房屋',
		price: 121.31,
		square: 96.12,
	};

	res.json({
		data: [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr0],
	});
};
