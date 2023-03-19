import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle, { AppContainer } from './styles';
import Visualizer from './layouts/Visualizer';
import Configurator from './layouts/Configurator';

const FormBuilder = () => {
  return (
    <>
      <Configurator />
      <Visualizer />
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <FormBuilder />
      </AppContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
