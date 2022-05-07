import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { wrapper } from '../store';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx }) => {
  return { pageProps: {} };
});

export default wrapper.withRedux(App);
