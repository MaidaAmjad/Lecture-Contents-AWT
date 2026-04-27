import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { lectures } from '../data/lectures';

const FALLBACK_QUOTES = [
  { content: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { content: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
  { content: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
  { content: "An investment in knowledge pays the best interest.", author: "Benjamin Franklin" },
  { content: "The more that you read, the more things you will know.", author: "Dr. Seuss" },
];

function QuoteBanner() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    fetch('https://api.quotable.io/random?tags=inspirational,education,wisdom', {
      signal: controller.signal,
    })
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((d) => setQuote({ content: d.content, author: d.author }))
      .catch(() => {
        const fb = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
        setQuote(fb);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const refresh = () => {
    setLoading(true);
    fetch('https://api.quotable.io/random?tags=inspirational,education,wisdom')
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((d) => setQuote({ content: d.content, author: d.author }))
      .catch(() => {
        const fb = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
        setQuote(fb);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="quote-banner anim-fade-down">
      <div className="quote-icon">❝</div>
      <div className="quote-body">
        {loading ? (
          <div className="quote-loading">
            <span className="quote-shimmer" />
            <span className="quote-shimmer short" />
          </div>
        ) : (
          <>
            <p className="quote-text">{quote?.content}</p>
            <span className="quote-author">— {quote?.author}</span>
          </>
        )}
      </div>
      <button className="quote-refresh" onClick={refresh} title="New quote" aria-label="Refresh quote">
        ↻
      </button>
    </div>
  );
}

function StatCard({ icon, label, value, sub, color }) {
  return (
    <div className="dash-stat-card" data-color={color}>
      <div className="dash-stat-icon">{icon}</div>
      <div className="dash-stat-info">
        <div className="dash-stat-value">{value}</div>
        <div className="dash-stat-label">{label}</div>
        {sub && <div className="dash-stat-sub">{sub}</div>}
      </div>
    </div>
  );
}

function ProgressRing({ pct }) {
  const r = 36;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  return (
    <svg className="progress-ring" width="88" height="88" viewBox="0 0 88 88">
      <circle cx="44" cy="44" r={r} fill="none" stroke="#e2e8f0" strokeWidth="8" />
      <circle
        cx="44" cy="44" r={r} fill="none"
        stroke="url(#ringGrad)" strokeWidth="8"
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1s ease', transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
      />
      <defs>
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <text x="44" y="48" textAnchor="middle" fontSize="14" fontWeight="700" fill="#1e293b">{pct}%</text>
    </svg>
  );
}

export default function DashboardPage({ completed }) {
  const [search, setSearch] = useState('');

  const total = 15;
  const done = completed.length;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const remaining = total - done;

  // Recent: last 3 completed
  const recentCompleted = lectures
    .filter((l) => completed.includes(l.id))
    .slice(-3)
    .reverse();

  // Next up: first lecture not completed
  const nextLecture = lectures.find((l) => !completed.includes(l.id));

  // All lectures for grid
  const LECTURE_TITLES = {
    8: "MongoDB & Mongoose", 9: "Error Handling", 10: "File Uploads",
    11: "WebSockets", 12: "GraphQL Basics",
  };
  const ALL_LECTURES = Array.from({ length: 15 }, (_, i) => {
    const num = i + 1;
    const found = lectures.find((l) => l.id === num);
    return found || { id: num, title: LECTURE_TITLES[num] || `Lecture ${num}`, noContent: true, description: 'Coming soon...' };
  });

  const filtered = ALL_LECTURES.filter((l) =>
    l.title.toLowerCase().includes(search.toLowerCase()) ||
    (l.description && l.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="dashboard-page">

      {/* ── Quote Banner ── */}
      <QuoteBanner />

      {/* ── Hero ── */}
      <div className="dash-hero anim-fade-up">
        <div className="dash-hero-text">
          <h1>Welcome to AWT Learning Hub</h1>
          <p>Advanced Web Technologies — Node.js, REST APIs, React, Angular & MERN Stack</p>
          {nextLecture && (
            <Link to={`/lecture/${nextLecture.id}`} className="dash-cta-btn">
              {done === 0 ? '🚀 Start Learning' : '▶ Continue Learning'} — Lecture {nextLecture.id}
            </Link>
          )}
        </div>
        <ProgressRing pct={pct} />
      </div>

      {/* ── Stats Row ── */}
      <div className="dash-stats stagger">
        <StatCard icon="📚" label="Total Lectures" value={total} sub="CSC337 Course" color="blue" />
        <StatCard icon="✅" label="Completed" value={done} sub={done === 0 ? 'Start today!' : 'Great work!'} color="green" />
        <StatCard icon="⏳" label="Remaining" value={remaining} sub={remaining === 0 ? 'All done! 🎉' : 'Keep going'} color="orange" />
        <StatCard icon="📊" label="Progress" value={`${pct}%`} sub={pct >= 50 ? 'Halfway there!' : 'Building momentum'} color="purple" />
      </div>

      {/* ── Recent + Next Up ── */}
      {(recentCompleted.length > 0 || nextLecture) && (
        <div className="dash-two-col">
          {nextLecture && (
            <div className="dash-panel anim-fade-up">
              <div className="dash-panel-title">▶ Up Next</div>
              <Link to={`/lecture/${nextLecture.id}`} className="dash-next-card">
                <div className="dash-next-num">Lecture {nextLecture.id}</div>
                <div className="dash-next-title">{nextLecture.title}</div>
                <div className="dash-next-desc">{nextLecture.description}</div>
                <div className="dash-next-arrow">→</div>
              </Link>
            </div>
          )}
          {recentCompleted.length > 0 && (
            <div className="dash-panel anim-fade-up">
              <div className="dash-panel-title">✅ Recently Completed</div>
              <div className="dash-recent-list">
                {recentCompleted.map((l) => (
                  <Link key={l.id} to={`/lecture/${l.id}`} className="dash-recent-item">
                    <div className="dash-recent-check">✓</div>
                    <div>
                      <div className="dash-recent-title">{l.title}</div>
                      <div className="dash-recent-sub">Lecture {l.id}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── All Lectures ── */}
      <div className="dash-section-header">
        <div className="section-title">All Lectures</div>
        <div className="dash-progress-inline">
          <div className="progress-bar-bg" style={{ width: 160 }}>
            <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
          </div>
          <span>{done}/{total} done</span>
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

      <div className="lectures-grid stagger">
        {filtered.map((lec) => {
          const isDone = completed.includes(lec.id);
          if (lec.noContent) {
            return (
              <div key={lec.id} className="lecture-card">
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
            <Link
              key={lec.id}
              to={`/lecture/${lec.id}`}
              className={`lecture-card anim-fade-up ${isDone ? 'completed-card' : ''}`}
              data-color={lec.color || undefined}
            >
              {isDone && <div className="card-completed-badge">✓</div>}
              <div className="card-num">Lecture {lec.id}</div>
              <div className="card-title">{lec.title}</div>
              <div className="card-desc">{lec.description}</div>
              <div className="card-meta">
                <span className="badge badge-theory">
                  {lec.type?.includes('Practical') ? 'Theory + Practical' : 'Theory'}
                </span>
                <span className="badge badge-duration">⏱ {lec.duration}</span>
                {isDone && <span className="badge badge-practical">✓ Done</span>}
              </div>
            </Link>
          );
        })}
      </div>

      {/* ── Team Footer ── */}
      <div className="team-footer anim-fade-up">
        <div className="team-footer-title">👨‍💻 Development Team</div>
        <div className="team-footer-inner">
          <div className="team-lead-col">
            <div className="team-role-label">Senior Developer &amp; Team Leader</div>
            <a
              href="https://muhammadabdullahwali.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="team-card team-card-lead"
            >
              <div className="team-avatar team-avatar-lead">MW</div>
              <div className="team-info">
                <div className="team-name">Muhammad Abdullah Wali</div>
                <div className="team-meta-row">
                  <span className="team-meta-badge">Instructor</span>
                  <span className="team-meta-badge team-meta-course">CSC337</span>
                </div>
                <div className="team-course-label">Advanced Web Technologies</div>
                <div className="team-link-label">View Portfolio →</div>
              </div>
            </a>
          </div>

          <div className="team-divider" />

          <div className="team-juniors-col">
            <div className="team-role-label">Junior Developers</div>
            <div className="team-juniors-row">
              <a
                href="https://maida-amjad.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="team-card team-card-maida"
              >
                <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #db2777, #f472b6)' }}>MA</div>
                <div className="team-info">
                  <div className="team-name">Maida Amjad</div>
                  <div className="team-link-label">View Portfolio →</div>
                </div>
              </a>
              <a
                href="https://amnashakeel-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="team-card team-card-amna"
              >
                <div className="team-avatar" style={{ background: 'linear-gradient(135deg, #0891b2, #22d3ee)' }}>AS</div>
                <div className="team-info">
                  <div className="team-name">Amna Shakeel</div>
                  <div className="team-link-label">View Portfolio →</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="team-footer-copy">
          Built with ❤️ for CSC337 — Advanced Web Technologies
        </div>
      </div>

    </div>
  );
}
