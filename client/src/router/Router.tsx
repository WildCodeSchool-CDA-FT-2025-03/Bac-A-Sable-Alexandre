import { createBrowserRouter } from 'react-router-dom'
import App from '../App.tsx';
import MyRepo from "../pages/MyRepo.tsx";
import Home from "../pages/Home.tsx";


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

  export default router;