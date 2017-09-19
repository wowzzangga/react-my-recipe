import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom'
  
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import RecipeDetail from './RecipeDetail';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/recipe/:id" component={RecipeDetail} />
          </div>
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
