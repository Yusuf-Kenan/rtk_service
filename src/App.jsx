import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainPage from "./pages/main-page/index";
import CategoryDetailPage from './pages/category-detail-page/index';

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
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
