import "./App.css";
import HomePage from "./components/home/home";
import Navigation  from "./components/nav/nav";
import Taekwondo  from "./components/taekwondo/taekwondo";
import Muaythai from "./components/muaythai/muaythai";
import KickBoxing from "./components/kickboxing/kickboxing";
import Artesmarcialesmixtas from "./components/artesmarcialesmixtas/artesmarcialesmixtas";
import Krabikrabong from "./components/krabikrabong/krabikrabong";
import Nosotros from "./components/nosotros/nosotros";
import Footer from "./components/footer/footer";
import Horarios from "./components/horarios/horarios";
import Instructores from "./components/instructores/instructores";
import Blog from "./components/blog/blog";
import Contacto from "./components/contacto/contacto";
import Vocabulario from "./components/vocabulario/vocabulario";
import VocabularioMuay from "./components/vocabulario/vocabularioMuaythai";

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/taekwondo" element={<Taekwondo/>}/>
          <Route path="/muaythai" element={<Muaythai/>}/>
          <Route path="/kickboxing" element={<KickBoxing/>}/>
          <Route path="/artesmarcialesmixtas" element={<Artesmarcialesmixtas/>}/>
          <Route path="/krabikrabong" element={<Krabikrabong/>}/>
          <Route path="/nosotros" element={<Nosotros/>}/>
          <Route path="/horarios" element={<Horarios/>}/>
          <Route path="/instructores" element={<Instructores/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/vocabulario" element={<Vocabulario/>}/>
          <Route path="/vocabularioMuay" element={<VocabularioMuay/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
