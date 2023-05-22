import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/main-page/index";
import CategoryDetailPage from './pages/category-detail-page/index';
import LoginPage from './pages/login-page/index';
import RegisterPage from './pages/register-page/index';

function App() {
  return (
    <BrowserRouter>
      <div className="container my-3">
        <Header />
        <main>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="category">
              <Route path=":slug" element={<CategoryDetailPage />} />
            </Route>
            <Route path="auth">
              <Route path="login" element={<LoginPage/>}/>
              <Route path="register" element={<RegisterPage/>}/>
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
