import { useParams, Link, useNavigate } from 'react-router-dom';
import { getLectureById, lectures } from '../data/lectures';
import LectureContent from '../components/LectureContent';

export default function LecturePage({ completed, onToggle }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const lecture = getLectureById(id);

  if (!lecture) {
    return (
      <div className="lecture-page">
        <div className="lecture-section" style={{ textAlign: 'center', padding: 48 }}>
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>📭</div>
          <h2 style={{ marginBottom: 8 }}>Lecture Not Available</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: 20 }}>
            This lecture content is coming soon.
          </p>
          <Link to="/" className="nav-btn primary">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const isDone = completed.includes(lecture.id);
  const sortedIds = lectures.map((l) => l.id).sort((a, b) => a - b);
  const currentIdx = sortedIds.indexOf(lecture.id);
  const prevId = currentIdx > 0 ? sortedIds[currentIdx - 1] : null;
  const nextId = currentIdx < sortedIds.length - 1 ? sortedIds[currentIdx + 1] : null;

  return (
    <div className="lecture-page">
      <div className="lecture-header">
        <div className="breadcrumb">
          <Link to="/">Home</Link> › Lecture {lecture.id}
        </div>
        <h1 className="lecture-title">{lecture.title}</h1>
        <div className="lecture-meta-row">
          <span className="badge badge-theory">{lecture.type}</span>
          <span className="badge badge-duration">⏱ {lecture.duration}</span>
          {isDone && <span className="badge badge-practical">✓ Completed</span>}
        </div>
        <button
          className={`complete-btn ${isDone ? 'unmark' : 'mark'}`}
          onClick={() => onToggle(lecture.id)}
        >
          {isDone ? '✓ Mark as Incomplete' : '☐ Mark as Completed'}
        </button>
      </div>

      <LectureContent lecture={lecture} />

      <div className="lecture-nav-btns">
        {prevId && (
          <button className="nav-btn" onClick={() => navigate(`/lecture/${prevId}`)}>
            ← Previous
          </button>
        )}
        <Link to="/" className="nav-btn">🏠 All Lectures</Link>
        {nextId && (
          <button className="nav-btn primary" onClick={() => navigate(`/lecture/${nextId}`)}>
            Next →
          </button>
        )}
      </div>
    </div>
  );
}
