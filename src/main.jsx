import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { RickAndMortyApp } from './RickAndMortyApp.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RickAndMortyApp />
    </Provider>
  </StrictMode>,
)
