import { FC, useEffect, useState } from 'react'
import reactlogo from './assets/images/react.svg'
import './assets/styles/app.css'
import './assets/styles/app.scss'

const App: FC = () => {
  const [fullname, setFullname] = useState('Dư Thanh Được')
  console.log(fullname)
  useEffect(() => {
    setFullname('Lê Việt Đức')
  }, [])
  const handleClick = (): void => {
    setFullname('Dư Thanh Được')
  }
  return (
    <div>
      <img src={reactlogo} alt='React Logo' width={100} height={100} />
      <h1>{fullname}</h1>
      <h2>Bài viết được viết tại blog {process.env.HOST}</h2>
      <button onClick={handleClick}>Click change full name</button>
    </div>
  )
}

export default App
