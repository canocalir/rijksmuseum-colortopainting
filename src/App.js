import LanguageProvider from './context/LanguageContext';
import AppRouter from './router/AppRouter';
import { MainContainer } from './shared/styled';

function App() {
  return (
    <LanguageProvider>
    <MainContainer>
     <AppRouter/>
    </MainContainer>
    </LanguageProvider>
  );
}

export default App;
