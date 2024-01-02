import React from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import Header from './Header';
import Ad1 from './Ad1';
import Ad2 from './Ad2';
import CreateAd from './CreateAd';



const Body = () => {
    const appRouter = createBrowserRouter ([
    {
        path : "/h",
        element: <Header/>
    },
    {
        path : "/dashboard",
        element: <AdInsight/>
    },
    {
        path: "/create",
        element: <CreateAd/>,
      },
      {
        path: "/1",
        element: <Ad1/>,
      },
      {
        path: "/2",
        element: <Ad2/>,
      },
 
    
]);
return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  );
};  

export default Body;