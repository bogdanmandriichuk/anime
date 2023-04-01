import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/MainPage/main'
import Header from "./components/Navbar/naviBar";

import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}

export default App;
