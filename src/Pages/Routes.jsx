import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './Home';
import Shorts from './Shorts';
import Library from './Library';
import Subscriptions from './Subscriptions';
import NotFound from './NotFound';
import Layout from './Layout';
import Videos from './Videos';

const Routes = () => {
    const element = useRoutes([
    {
        children:[
            {
               element:<Layout/>,
                 children:[
                  
                  {
                    path:'/',
                    element:<Home/>
    
                  },
                  {
                    path:'/shorts',
                    element:<Shorts/>

                  },
                  {
                    path:'/library',
                    element:<Library/>
                  },
                  {
                    path:'/subscriptions',
                    element:<Subscriptions/>
                  },
                  {
                    path:'/videos',
                    element:<Videos/>
                  },
                  {
                    path:'*',
                    element:<NotFound/>
                  },
                         ]
            },
                  ]
    },
    {
        children:[
            {
            //   path:'/login',
            //   element:<Login/>
            }
                ]
    }
])

return element
}
export default Routes