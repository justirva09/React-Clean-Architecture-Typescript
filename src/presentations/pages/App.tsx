import '@styles/App.css'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import routes from '@routers/routes'

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        {routes.map(route => (
          <Route path={route.path} element={route.element} key={route.id} />
        ))}
      </Switch>
    </Router>
  </div>
)

export default App
