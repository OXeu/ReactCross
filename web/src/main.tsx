import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { setComponentFactory } from '@thankrain/cross-core'
import { ImageProvider } from './providers/image.tsx'
import { RouteProvider } from './providers/navigation.tsx'
import { Navigate } from 'react-router-dom'

setComponentFactory({
  TextView: (props) => <p {...props} />,
  ImageView: (props) => <ImageProvider {...props} />,
  Container: (props) => <div {...props} />,
  createRouteView: (props) => RouteProvider(props),
  Navigate: (props) => <Navigate {...props} />,
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
