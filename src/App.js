import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Footer } from './components/componentExport';
import { Home, About, NotFound } from './pages/pagesExport';
const App = () => {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main className='container mx-auto pb-12 px-3'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
