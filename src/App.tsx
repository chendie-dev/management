import { useState } from 'react'
import router from './router'
import {useRoutes} from 'react-router-dom'
import {ConfigProvider} from 'antd'
// import 
function App() {
  const [count, setCount] = useState(0)
  const outlet=useRoutes(router)
  return (
      <ConfigProvider theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}>
      {outlet}
  </ConfigProvider>
  ) 
}

export default App
 