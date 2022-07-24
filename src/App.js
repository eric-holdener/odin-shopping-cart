import './App.css';
import HeaderFooter from './components/HeaderFooter';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className='app-container'>
      <HeaderFooter>
        <Outlet />
      </HeaderFooter>
    </div>
  );
}

export default App;
