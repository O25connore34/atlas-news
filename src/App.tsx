import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ArticleSlugsProvider } from './ArticleSlugs.tsx'
import { Layout } from './components/Layout.tsx'
import { ArticlePage } from './pages/ArticlePage.tsx'
import { AuthorPage } from './pages/AuthorPage.tsx'
import { HomePage } from './pages/HomePage.tsx'
import { LangRedirect } from './pages/LangRedirect.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
import { SearchPage } from './pages/SearchPage.tsx'
import { SectionPage } from './pages/SectionPage.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <ArticleSlugsProvider>
        <Routes>
          <Route path="/" element={<LangRedirect />} />
          <Route path="/:locale" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="section/:sectionId" element={<SectionPage />} />
            <Route path="article/:slug" element={<ArticlePage />} />
            <Route path="author/:authorId" element={<AuthorPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ArticleSlugsProvider>
    </BrowserRouter>
  )
}
