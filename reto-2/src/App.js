
import { GlobalStyles, lightTheme, darkTheme } from './components/styles/Global';
import Tema from './components/Tema';
import { Stars } from './components/Stars';
import { ThemeProvider } from 'styled-components';
import { StyledContainer } from './components/styles/Container.styled';
import { List } from './components/ListTarea';
import AddTarea from './components/AddTarea';
import { Filter } from './components/styles/ListTarea.styled';
import VisibilityFilter from './components/VisibilityFilter';

function App() {

  const [theme, changeTheme] = Tema();
  const cambioTema = theme === 'light' ? lightTheme : darkTheme;


  return (
    <>
      <ThemeProvider theme={cambioTema}>
        <GlobalStyles />
        <StyledContainer>
          <Stars theme={theme} changeTheme={changeTheme} />
          <AddTarea/>
          <List/>
          <Filter/>
          <VisibilityFilter/>
        </StyledContainer>
      </ThemeProvider>
    </>

  );
}

export default App;
