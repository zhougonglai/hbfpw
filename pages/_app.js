import App from 'next/app';

class MyApp extends App {
	componentDidMount() {
		console.log('componentDidMount');
	}

	render() {
		const { Component, pageProps } = this.props;
		return <Component {...pageProps} />;
	}
}

export default MyApp;
