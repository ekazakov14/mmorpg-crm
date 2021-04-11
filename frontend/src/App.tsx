import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { LoginPage } from './pages/LoginScreen';
import { observer } from 'mobx-react';
import AuthStore from './stores/AuthStore';
import MainLayout from './components/layouts/MainLayout';
import 'antd/dist/antd.css';

const App = observer(() => {
  if (AuthStore.isLoading) {
    return <div>Preloader</div>;
  } else {
    if (!AuthStore.isLoggedIn) {
      return (
        <Router>
          <Redirect to="/login" />
          <Route path="/login"><LoginPage /></Route>
        </Router>
      );
    } else {
      return (
        <Router>
          <MainLayout />
        </Router>
      );
    }
  }
});

export default App;