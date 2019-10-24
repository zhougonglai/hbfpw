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

	res.json({
		data: [arr1, arr2, arr3, arr4],
	});
};
