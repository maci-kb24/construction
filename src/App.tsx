import Blog from './components/Blog'
import Contact from './components/Contact'
import Header from './components/Header'
import Services from './components/Services'
function App() {

  return (
    <div className="w-full h-full flex flex-col relative box-border">
      <Header />
      <Services />
      <Blog />
      <Contact />
    </div>
  )
}

export default App
