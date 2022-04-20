import { Switch,Route,useLocation} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './Components/Themes'
import GlobalStyle from './GlobalStyles'
import Main from './Components/Main';
import MySkillsPage from './Components/MySkillsPage'
import AboutPage from './Components/AboutPage'
import WorkPage from './Components/WorkPage'
import BlogPage from './Components/BlogPage'
import { AnimatePresence } from "framer-motion";
import SoundBar from './subComponents/SoundBar';



function App() {
  const location = useLocation()
  return <>
  <GlobalStyle/>
<ThemeProvider theme={lightTheme}>
  <SoundBar/>
  <AnimatePresence exitBeforeEnter>

<Switch location={location} key={location.pathname}>
  <Route exact path = '/' component={Main}></Route>
  <Route exact path = '/about' component={AboutPage}></Route>
  <Route exact path = '/blog' component={BlogPage}></Route>
  <Route exact path = '/work' component={WorkPage}></Route>
  <Route exact path = '/skills' component={MySkillsPage}></Route>

</Switch>
  </AnimatePresence>

</ThemeProvider>
    </>
    
}

export default App

