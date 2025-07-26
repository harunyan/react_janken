import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import './index.css'
import App from './App.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <div>ホーム画面</div>,
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
