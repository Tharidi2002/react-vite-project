import './App.css';
import { MainContent } from "./view/Common/MainContent/MainContent";
import { Footer } from "./view/Common/Footer/Footer";
import {Navbar} from "./view/Common/navbar/Navbar.tsx";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div className="app-container">
           <BrowserRouter>
               <Navbar />
               <MainContent />
               <Footer />
           </BrowserRouter>
        </div>
    );
}

export default App;