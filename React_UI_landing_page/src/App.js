import './app.css'
import {Navbar,Register,SocialMedia} from './components/index'
import {Header,Main,Features,EarlyAccess, Documentations, Footer} from './containers/index'
function App() {
  return (
    <div className="App">
      <div className='bg_gradient'>
        <Navbar/>
        <Header/>
      </div>
      <SocialMedia/>
      <Main/>
      <Features/>
      <EarlyAccess/>
      <Register/>
      <Documentations/>
      <Footer/>
    </div>
  );
}

export default App;