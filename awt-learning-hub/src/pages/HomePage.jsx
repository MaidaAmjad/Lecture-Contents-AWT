import { useState } from 'react';
import { Link } from 'react-router-dom';
import { lectures } from '../data/lectures';

const LECTURE_TITLES = {
  8: "MongoDB & Mongoose",
  9: "Error Handling",
  10: "File Uploads",
  11: "WebSockets",
  12: "GraphQL Basics",
};

const ALL_LECTURES = Array.from({ length: 15 }, (_, i) => {
  const num = i + 1;
  const found = lectures.find((l) => l.id === num);
  return found || { id: num, title: LECTURE_TITLES[num] || `Lecture ${num}`, noContent: true, description: 'Coming soon...' };
});

export default function HomePage({ completed }) {
  const [search, setSearch] = useState('');

  const filtered = ALL_LECTURES.filter((l) =>
    l.title.toLowerCase().includes(search.toLowerCase()) ||
    (l.description && l.description.toLowerCase().includes(search.toLowerCase()))
  );

  const total = lectures.length;
  const done = completed.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>AWT Learning Hub</h1>
        <p>Advanced Web Technologies — Node.js, REST APIs, and more.</p>
        <div className="stats-row">
          <div className="stat-chip">📚 15 Lectures</div>
          <div className="stat-chip">✅ {done} Completed</div>
          <div className="stat-chip">📊 {pct}% Progress</div>
        </div>
      </div>

      <div className="search-bar-home">
        <input
          type="text"
          placeholder="🔍  Search lectures by title or topic..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="section-title">All Lectures</div>

      <div className="lectures-grid">
        {filtered.map((lec) => {
          const isDone = completed.includes(lec.id);
          if (lec.noContent) {
            return (
              <div key={lec.id} className="lecture-card" style={{ cursor: 'default' }}>
                <div className="card-num">Lecture {lec.id}</div>
                <div className="card-title">{lec.title}</div>
                <div className="card-desc">{lec.description}</div>
                <div className="no-content-overlay">
                  <span className="coming-soon">Coming Soon</span>
                </div>
              </div>
            );
          }
          return (
            <Link key={lec.id} to={`/lecture/${lec.id}`} className={`lecture-card ${isDone ? 'completed-card' : ''}`} data-color={lec.color || undefined}>
              {isDone && <div className="card-completed-badge">✓</div>}
              <div className="card-num">Lecture {lec.id}</div>
              <div className="card-title">{lec.title}</div>
              <div className="card-desc">{lec.description}</div>
              <div className="card-meta">
                <span className="badge badge-theory">{lec.type?.includes('Practical') ? 'Theory + Practical' : 'Theory'}</span>
                <span className="badge badge-duration">⏱ {lec.duration}</span>
                {isDone && <span className="badge badge-practical">✓ Done</span>}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
