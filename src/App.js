import Router from "./routes/Router";
import Layout from "./styles/Layout";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
