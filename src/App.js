import './styles/main.scss'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SubPage from './pages/SubPage';
import SubPageContents from "./assets/subpages.json"
import Navbar from './components/Navbar';

function App() {
  console.log(SubPageContents)
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Navbar subpages={SubPageContents}/>}/>
      </Routes>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {SubPageContents.map( subpage => {
           return <Route path={subpage.path} element={<SubPage {...subpage} />} />
        })}
      </Routes>
    </div>
  );
}

export default App;
