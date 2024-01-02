import React from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import AdInsight from './components/AdInsight';
import Ad1 from './components/Ad1';
import Ad2 from './components/Ad2';
import CreateAd from './components/CreateAd';
import Submit from './components/Submit';


const App = () => {
  const appRouter = createBrowserRouter ([
    {
        path : "/",
        element: <AdInsight/>
    },
    {
        path : "/create-add/text",
        element: <Ad1/>
    },
   
  {
    path : "/create-add/img",
    element: <Ad2/>
},
{
  path : "/create-ad",
  element: <CreateAd/>
},
{
  path : "/submitted",
  element: <Submit/>
},
]);
return (
<div>
    <RouterProvider router={appRouter}/>
</div>
);
};  
export default App;