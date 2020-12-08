import Home from './components/Home/Home';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  );
}

export default App;
