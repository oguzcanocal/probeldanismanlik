import './styles/main.scss'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SubPage from './pages/SubPage';
import egitimler from "./assets/egitimler.json"
import periyodik from "./assets/periyodik.json"
import issagligi from  "./assets/is_sagligi.json"
import sgk from "./assets/sgk.json"
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        {egitimler.map( subpage => {
           return <Route path={subpage.path} element={<SubPage {...subpage} />} />
        })}
        {periyodik.map( subpage => {
           return <Route path={subpage.path} element={<SubPage {...subpage} />} />
        })}
        {issagligi.map( subpage => {
           return <Route path={subpage.path} element={<SubPage {...subpage} />} />
        })}
        {sgk.map( subpage => {
           return <Route path={subpage.path} element={<SubPage {...subpage} />} />
        })}
      </Routes>
    </div>
  );
}

export default App;
