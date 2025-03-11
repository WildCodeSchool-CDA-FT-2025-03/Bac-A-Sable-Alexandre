import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App.tsx';
import MyRepo from "./pages/MyRepo.tsx";
import Home from "./pages/Home.tsx"

const router = createBrowserRouter([{
  path: '/',
  element : <App />,
  children:[
    {
      path: "",
      element: <Home />
      /*loader: async () => {
        const result = await client.get("/repos");
        console.log("Result", result);
        return result;
      },*/
    },
    {
      path: '/repos/:id',
      element : <MyRepo />
    }
  ]
},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
