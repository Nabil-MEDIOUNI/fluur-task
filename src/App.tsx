import Header from './components/Header';

import { Container } from './utils/styles';

const App: React.FC = () => {
  return (
    <Container className="App">
      <Container className="yellow-bg" />
      <Header />
    </Container>
  );
};

export default App;
