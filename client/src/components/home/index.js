import Hero from './Hero.js'
import About from './About.js'
import Use from './Use.js'
import Features from './features/index.js'
import Team from './Team.js'
import '../../styles/home.css'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Use/>
        <Features/> 
        <Team/>
    </div>
  )
}

export default Home;