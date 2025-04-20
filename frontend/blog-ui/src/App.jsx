import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import ArticleDetail from './pages/ArticleDetailPage'
import ArticleForm from './pages/ArticleFormPage'
import ArticleDetailEdit from './pages/ArticleDetailEditPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/articles/new" element={<ArticleForm />} />
        <Route path="/articles/edit/:id" element={< ArticleDetailEdit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
