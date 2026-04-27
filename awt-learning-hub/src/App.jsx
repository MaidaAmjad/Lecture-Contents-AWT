import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardPage from './pages/DashboardPage';
import LecturePage from './pages/LecturePage';
import { useProgress } from './hooks/useProgress';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { completed, toggle } = useProgress();
  const location = useLocation();

  // Close sidebar on every route change (mobile nav)
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const pageTitle = isHome ? 'Dashboard' : 'Lecture Details';

  return (
    <div className="app-layout">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        completed={completed}
        searchQuery={search}
        onSearch={setSearch}
      />
      <div className="main-content">
        <div className="topbar">
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {sidebarOpen ? '✕' : '☰'}
          </button>
          <div className="topbar-title">{pageTitle}</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            {completed.length} / 15 done
          </div>
        </div>
        <Routes>
          <Route path="/" element={<DashboardPage completed={completed} />} />
          <Route
            path="/lecture/:id"
            element={<LecturePage completed={completed} onToggle={toggle} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
