import { Provider } from 'react-redux';
import store from './redux/store.js';
import Body from './components/Body.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Icon from './assets/Icon.js'
import First from './components/First.js';
import useScroll from './utils/useScroll.js';
import Footer from './components/Footer.js';

function App() {
  const show= useScroll();
  return (
    <Provider store={store}>
    <div>
      <Body/>
      {
        show?  <Footer/>: null
     }
    </div>
    </Provider>
  );
}

export default App;
