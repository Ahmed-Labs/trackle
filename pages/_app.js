import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  const Layout = Component.getLayout || EmptyLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

const EmptyLayout = ({ children }) => <>{children}</>;
