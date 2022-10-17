import React from 'react'
import ReactDOM from 'react-dom/client'
import '@styles/index.css'
import 'antd/dist/antd.css'
import App from '@pages/App'

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
