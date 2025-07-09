import Header from "./Header/Header.jsx"
import Footer from "./Footer/Footer.jsx"
import Comment from "./Comment/comment.jsx"
import Download from './Download/download.jsx'
import SignUp from "./SignUp/sign-up.jsx"
import Hero from './Hero/hero.jsx'
import About from './About/About.jsx'
import How from "./How/how.jsx"


function App() {
  
  return (
    <>
     <Header/>
     <Hero/>
     <About/>
      <SignUp/>  
      <How/> 
      <Comment/>
     <Download/>
     <Footer/>
   
    </>
  )
}

export default App

