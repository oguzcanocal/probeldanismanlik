import './styles/main.scss'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SubPage from './pages/SubPage';
import SubPageContents from "./assets/subpages.json"

function App() {
  console.log(SubPageContents)
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} title="Probel Mühendislik"/>
        {SubPageContents.map( subpage => {
           return <Route path={subpage.path} element={<SubPage {...subpage} />} />
        })}
      </Routes>
    </div>
  );
}

export default App;
