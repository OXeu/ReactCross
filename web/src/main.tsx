import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouteProps, setComponentFactory } from '@thankrain/cross-core'
import { ImageProvider } from './providers/image.tsx'
import { RouteProvider } from './providers/navigation.tsx'

setComponentFactory({
  TextView: (props) => <p {...props} />,
  ImageView: (props) => <ImageProvider {...props} />,
  Container: (props) => <div {...props} />,
  createRouteView: (initialRouteName: string, routes: RouteProps[]) => RouteProvider(initialRouteName, routes),
})
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
