import App from 'next/app';

const Noop = ({ children }) => children;

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		const Layout = Component.Layout || Noop;

		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		);
	}
}

export default MyApp;
