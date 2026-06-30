import { useState } from 'react';
import TopNav from './components/TopNav';
import HomePage from '../Proj';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import IssuesPage from './pages/Issues';
import TestimoniesPage from './pages/Testimonies';
import StudentsPage from './pages/Students';
import EducatePage from './pages/Educate';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'issues':
        return <IssuesPage />;
      case 'testimonies':
        return <TestimoniesPage />;
      case 'students':
        return <StudentsPage />;
      case 'educate':
        return <EducatePage />;
      case 'home':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <TopNav currentPage={currentPage} setPage={setCurrentPage} />
      <main className="mx-auto max-w-7xl px-6 py-8">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
