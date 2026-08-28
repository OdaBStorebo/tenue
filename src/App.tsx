
import './App.css'
import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WardrobePage } from './pages/WardrobePage/WardrobePage';
import { Navigation } from './components/Navigation/Navigation';


function App() {

  return (
    <BrowserRouter>
    <div className={styles.appContainer}>
      <Navigation />
      <main className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<WardrobePage />} />
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  )
}

export default App
