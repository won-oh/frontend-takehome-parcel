import Home from './src/components/home';
import Saved from './src/components/saved';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route path="/" component={Home} exact />
          <Route path="/saved" component={Saved} />
        </div>
      </Router>
      
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
