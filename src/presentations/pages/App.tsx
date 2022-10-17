import '@styles/App.css'
import { BrowserRouter as Router, Routes as Switch, Route, Link } from 'react-router-dom'
import routes from '@routers/routes'

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Switch>
    </Router>
  </div>
)

export default App
