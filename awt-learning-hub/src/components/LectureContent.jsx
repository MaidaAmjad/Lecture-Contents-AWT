import { useState } from 'react';

function Table({ headers, rows }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SubSection({ sub }) {
  return (
    <div className="subsection">
      <div className="subsection-title">{sub.title}</div>
      {sub.content && (
        <ul className="content-list">
          {sub.content.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      )}
      {sub.list && (
        <>
          <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', margin: '8px 0 4px' }}>
            {sub.list.label}
          </div>
          <ul className="content-list">
            {sub.list.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </>
      )}
      {sub.example && (
        <div className="example-box">
          <div className="example-label">{sub.example.label}</div>
          <ul className="content-list">
            {sub.example.points.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      )}
      {sub.table && <Table {...sub.table} />}
      {sub.code && <pre className="code-block">{sub.code}</pre>}
    </div>
  );
}

function Section({ section }) {
  return (
    <div className="lecture-section" data-color={section.color || undefined}>
      <h2 className="section-heading">{section.heading}</h2>

      {section.content && (
        <ul className="content-list">
          {section.content.map((c, i) => <li key={i}>{c}</li>)}
        </ul>
      )}

      {section.list && (
        <div style={{ margin: '10px 0' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>{section.list.label}</div>
          <ul className="content-list">
            {section.list.items.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      )}

      {section.example && (
        <div className="example-box">
          <div className="example-label">{section.example.label}</div>
          <ul className="content-list">
            {section.example.points.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
      )}

      {section.table && <Table {...section.table} />}

      {section.extra && (
        <div className="example-box" style={{ marginTop: 12 }}>
          <div className="example-label">💡 Note</div>
          <p style={{ fontSize: '0.88rem' }}>{section.extra}</p>
        </div>
      )}

      {section.subsections && section.subsections.map((sub, i) => (
        <SubSection key={i} sub={sub} />
      ))}

      {section.code && <pre className="code-block">{section.code}</pre>}
    </div>
  );
}

function QuizItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="quiz-item">
      <div className="quiz-question" onClick={() => setOpen(!open)}>
        <span>{item.q}</span>
        <span>{open ? '▲' : '▼'}</span>
      </div>
      {open && <div className="quiz-answer quiz-answer-animated">✅ {item.a}</div>}
    </div>
  );
}

export default function LectureContent({ lecture }) {
  return (
    <>
      {lecture.sections.map((sec, i) => (
        <Section key={i} section={sec} style={{ animationDelay: `${i * 0.08}s` }} />
      ))}

      {lecture.quiz && lecture.quiz.length > 0 && (
        <div className="quiz-section" data-color={lecture.color || undefined}>
          <div className="quiz-title">🧠 Quiz & Review Questions</div>
          {lecture.quiz.map((q, i) => <QuizItem key={i} item={q} />)}
        </div>
      )}
    </>
  );
}
