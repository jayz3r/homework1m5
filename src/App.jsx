import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import MainPage from './pages/MainPage'
import Posts from './pages/posts'
import PublishPost from './pages/PublishPost'


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path='Posts' element={<Posts/>}/>
        <Route path='Publish' element={<PublishPost/>}/>
      </Route>
      </Routes>    
    </>
  )
}

export default App
