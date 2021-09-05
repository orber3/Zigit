import LoginComponent from './Components/LoginComponent';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Pages/main';
import InfoPage from './Pages/InfoPage';

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Main} exact />
        <Route path="/info" component={InfoPage} />
        <Route path="/login" component={LoginComponent} />
      </Router>
    </>
  );
}

export default App;
