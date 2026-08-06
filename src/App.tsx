import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import './App.css'

function App() {
  return (
    <div className="site">
      <Hero />
      <main>
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
