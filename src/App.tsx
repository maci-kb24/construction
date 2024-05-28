import Blog from './components/Blog'
import Header from './components/Header'
import Services from './components/Services'
function App() {

  return (
    <div className="w-full h-full flex flex-col relative box-border">
      <Header />
      <Services />
      <Blog />
    </div>
  )
}

export default App
