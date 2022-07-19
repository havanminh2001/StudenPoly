import './App.css'
import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RoutesPublic } from './routes/Rotes'
import DefaultLayout from './components/layouts/defaultLayout/DefaultLayout'
import DefaultLayoutOnly from './components/layouts/defaultLayoutOnly/DefaultLayoutOnly'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {RoutesPublic.map((rotes, index) => {
            const Page = rotes.component
            let Layout = DefaultLayout;
            if (rotes.Layout) {
              Layout = DefaultLayoutOnly
            } else if (rotes.Layout === null) {
              Layout = Fragment
            }
            return (
              <Route
                key={index}
                path={rotes.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}
export default App
