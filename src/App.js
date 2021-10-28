import './App'
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Interests from './components/Interests';
import Contact from './components/Contact'

const App = () => {
    return (
        <div className="app">
          <Header />  
          <ProjectList />
          <Interests />
          <Contact />
        </div>
    )
}

export default App;