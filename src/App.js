
import './App.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Skills } from './components/Skills';
// import { Projects } from './components/Projects';
// import { ProjectCard } from './components/ProjectCard';
import { Footer } from './components/Footer';
import Projects from './components/MyProjects';
// import { MailchimpForm } from './components/MailchimpForm';
// import { ContactForm } from "./components/ContactMe";
// import ContactForm from './components/ContactForm'; // Adjust the path based on your file structure
import ContactSection from './components/ContactSection'; // Adjust the path based on your file structure
import SkillsSlider from './components/SkillsSlider';


function App() {
  return (
   <div className="App">
    <NavBar/>
    <Banner/>
    {/* <Skills/> */}
    <SkillsSlider/>
    {/* <Projects/> */}
    <Projects/>
    {/* <ProjectCard/> */}
    {/* <ContactForm/> */}
    <ContactSection/>
    {/* <MailchimpForm/> */}
    <Footer/>
    </div>
  );
}

export default App;
