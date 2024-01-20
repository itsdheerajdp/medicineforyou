import './App.css'
import 'semantic-ui-css/semantic.min.css'
import HomePage from './Components/HomePageComponents/HomePage'
import CareerPage from './Components/CareerPageComponents/CareerPage';
import StorePage from './Components/StorePageComponents/StorePage';
import NoPage from './Components/NoPageComponents/NoPage';
import AdminPage from './Components/AdminPageComponents/AdminPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/api/admin/auth0/admin/dheeraj/adminpage" element={<AdminPage />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
