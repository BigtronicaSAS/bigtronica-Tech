import Header from '../../components/Header/Header';
import {Hero} from '../../components/Hero/Hero';
import Marks from '../../components/Marks/Marks'
import Interest from '../../components/Interest/Interest';
import Mail from '../../components/Mail/Mail';
import Footer from '../../components/Footer/Footer'
import './IndexPage.css';
import 'animate.css'
const ContactPage = () => {
  return (
    <div className="IndexPage">
      <div>
        <div className="animate__animated animate__flash white-gradient" />
        <Header />
        <Hero />
      </div>
      <Marks />
      <Interest />
      {/* <Mail />
      <Footer /> */}
    </div>
  )
}

export default ContactPage;
