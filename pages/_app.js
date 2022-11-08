import "../styles/globals.css";
import { ThemeProvider } from "./themeContext";

function MyApp({ Component, pageProps }) {
  const Layout = Component.getLayout || EmptyLayout;

  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

const EmptyLayout = ({ children }) => <>{children}</>;
