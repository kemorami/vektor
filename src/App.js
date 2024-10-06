
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Content from './components/content/Content.jsx';
import Catalog from './components/catalog/Catalog.jsx'
import About from './components/about/About.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import Services from './components/services/Services.jsx';
import Object from './components/object/Object.jsx';
import Header from './components/header/Header.jsx';
import Basemnt from './components/basement/Basement.jsx'
import Midle from './components/midle/Midle.jsx';
import Partners from './components/partnerts/Partners.jsx'
function App() {
    return (
        <div className='app'>
          <BrowserRouter>
            <Header/>
            <Content>
            <div className={"content"}>
            <Routes>
                <Route exact path="/" element={<Midle/>} />
                <Route exact path="catalog" element={<Catalog/>}/>
                <Route exact path="about" element={<About/>} />
                <Route exact path="contacts" element={<Contacts/>} />
                <Route exact path="services" element={<Services/>} />
                <Route exact path="object" element={<Object/>} />
                <Route exact path="partners" element={<Partners/>}/>
            </Routes>
            </div>
            </Content>
            <Basemnt/>
          </BrowserRouter>
        </div>
    );

}

export default App;
