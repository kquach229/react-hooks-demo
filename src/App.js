import './App.css'
import ContextProvider from './context/ContextProvider'

import Header from './header'

function App() {
  return (
    // wrap app in context provider
    <ContextProvider>
      <div className="App">
        <Header />
      </div>
    </ContextProvider>
  )
}

export default App
