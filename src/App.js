import { Provider } from 'react-redux';

import './App.css';
import Routes from './routes';
import { GlobalStyler } from './theme';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyler />
      <Routes />
    </Provider>
  );
}

export default App;
