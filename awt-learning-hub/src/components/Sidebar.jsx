import { Link, useParams } from 'react-router-dom';
import { lectures } from '../data/lectures';

const LECTURE_TITLES = {
  9: "Error Handling",
  6: "Authentication & JWT",
  9: "Error Handling",
  10: "File Uploads",
  11: "WebSockets",
  12: "GraphQL Basics",
  13: "Deployment",
  14: "Testing APIs",
  15: "Project & Review",
};

const ALL_LECTURES = Array.from({ length: 15 }, (_, i) => {
  const num = i + 1;
  const found = lectures.find((l) => l.id === num);
  return found || { id: num, title: LECTURE_TITLES[num] || `Lecture ${num}`, noContent: true };
});

export default function Sidebar({ isOpen, onClose, completed, searchQuery, onSearch }) {
  const { id } = useParams();
  const activeId = id ? parseInt(id) : null;

  const filtered = ALL_LECTURES.filter((l) =>
    l.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const total = lectures.length;
  const done = completed.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">🎓 AWT Learning Hub</div>
          <div className="sidebar-sub">Advanced Web Technologies</div>
        </div>

        <div className="sidebar-progress-wrap">
          <div className="progress-label">
            <span>Progress</span>
            <span>{done}/{total} completed</span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <div className="sidebar-search">
          <input
            type="text"
            placeholder="Search lectures..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <nav className="sidebar-nav">
          {filtered.map((lec) => {
            const isActive = activeId === lec.id;
            const isDone = completed.includes(lec.id);
            return (
              <Link
                key={lec.id}
                to={lec.noContent ? '#' : `/lecture/${lec.id}`}
                className={`nav-item ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''} ${lec.noContent ? 'no-content' : ''}`}
                onClick={!lec.noContent ? onClose : (e) => e.preventDefault()}
              >
                <div className="nav-num">{isDone ? '✓' : lec.id}</div>
                <div className="nav-text">{lec.title}</div>
                {isDone && <span className="nav-check">✓</span>}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
