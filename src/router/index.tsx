import React,{lazy} from 'react'
import {Navigate} from 'react-router-dom'
import Home from '../views/home'
const Page1=lazy(()=>import ('../views/page1'))
const Page2=lazy(()=>import ('../views/page2'))
const withLoading=(comp:JSX.Element)=>(
    <React.Suspense>
        {comp}
    </React.Suspense>
)
const routes=[
    {
        path:"/",
        element:<Navigate to="/page1"/>
    },
    {
        path:"/",
        element:<Home/>,
        children:[ 
           {
            path:"/page1",
            element:withLoading(<Page1/>)
           },
           {
            path:"/page2",
            element:withLoading(<Page2/>)
           }

        ]
    }
]
export default routes