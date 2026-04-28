import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Programs from './pages/Programs';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const onNavigate = (page: string) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={onNavigate} />;
      case 'about':
        return <AboutUs />;
      case 'programs':
        return <Programs onNavigate={onNavigate} />;
      case 'services':
        return <Services onNavigate={onNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={onNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;