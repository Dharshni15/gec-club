import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

interface EventCluster {
  id: string;
  title: string;
  time: string;
  color: string;
  formUrl: string;
  maxEvents: number;
  events: EventItem[];
}

interface EventItem {
  id: string;
  name: string;
  time: string;
  icon: string;
  formUrl?: string;
  rules?: string[];
}

const EventRegistration: React.FC = () => {
  const [hoveredEventId, setHoveredEventId] = useState<string | null>(null);
  const [tooltipEvent, setTooltipEvent] = useState<EventItem | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ top: number; left: number } | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const closeBtnRef = React.useRef<HTMLButtonElement | null>(null);

  const openDetails = (ev: EventItem) => setSelectedEvent(ev);
  const closeDetails = () => setSelectedEvent(null);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeDetails(); };
    if (selectedEvent) {
      window.addEventListener('keydown', onKey);
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedEvent]);

  const eventClusters: EventCluster[] = [
    {
      id: 'cluster1',
      title: 'Morning Events',
      time: '9:00 AM - 10:30 AM',
      color: '#203a9f',
      formUrl: 'https://forms.gle/pHnFCTRNCKSEED3V8',
      maxEvents: 2,
      events: [
        {
          id: 'paper-presentation',
          name: 'Paper Presentation',
          time: '9:30 AM - 10:30 AM',
          icon: '📝',
          formUrl: 'https://forms.gle/d58nLWkqys4cVk4t7',
          rules: [
            'Team size: 3 members',
            'Abstract submission mandatory',
            'Paper title required',
            'Presentation time: 5 min + 2 min Q&A (total 7 min)',
            'PPT format only'
          ]
        },
        {
          id: 'project-presentation',
          name: 'Project Presentation',
          time: '9:30 AM - 10:30 AM',
          icon: '💻',
          formUrl: 'https://forms.gle/9TqHqm7b23zxGXm69',
          rules: [
            'Bring your own prototype',
            '10 min presentation + 5 min Q&A',
            'Explain technical implementation'
          ]
        },
        {
          id: 'video-editing',
          name: 'Video Editing',
          time: '10:00 AM - 11:00 AM',
          icon: '🎬',
          formUrl: 'https://forms.gle/aJBH5cb3N8BASELV8',
          rules: [
            'Team size: 2 members',
            'Video duration: 30 sec to 1 min',
            'Event time: 10:00 AM - 11:00 AM',
            'Theme: Gender equality in leadership, sports, role model',
            'Raw footage may be provided or create original clips',
            'Submit final clip within time'
          ]
        }
      ]
    },
    {
      id: 'cluster2',
      title: 'Late Morning Events',
      time: '11:00 AM - 12:30 PM',
      color: '#1c33ccff',
      formUrl: 'https://forms.gle/pm8Mak7Sc52tEL4Y8',
      maxEvents: 1,
      events: [
        {
          id: 'ui-ux-design',
          name: 'UI/UX Design using Figma',
          time: '11:00 AM - 12:30 PM',
          icon: '🎨',
          formUrl: 'https://forms.gle/XHpFB923v7Qu8G2A6',
          rules: [
            'Team size: 2 members',
            'Bring your own laptops',
            'Design based on given problem statement',
            'Time: 11:00 AM - 12:30 PM'
          ]
        },
        {
          id: 'code-debugging',
          name: 'Code Debugging',
          time: '11:00 AM - 12:30 PM',
          icon: '🐛',
          formUrl: 'https://forms.gle/qMaQx6sEWJWTrCAdA',
          rules: [
            'Team size: 2 members',
            'Two rounds: Round 1 - Identify and fix logical and syntax errors; Round 2 - Code snippet–based debugging',
            'Language: Java',
            'Time: 11:00 AM – 12:30 PM',
            'Teams shortlisted in the first round will proceed to the second round'
          ]
        },
        {
          id: 'cad-tinker',
          name: 'CAD/Tinker CAD',
          time: '11:00 AM - 12:30 PM',
          icon: '🛠️',
          formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdxf65aYP4eo4H-uHzWA-9YTl9E9Xv4hL-MmdxL086XKieiHQ/viewform?usp=header',
          rules: [
            'Team size: 2 members',
            'Winners selected based on performance/time',
            'Team limit: 25 teams'
          ]
        }
      ]
    },
    {
      id: 'cluster3',
      title: 'Afternoon Events',
      time: '1:30 PM - 2:30 PM',
      color: '#1e2adb',
      formUrl: 'https://forms.gle/ti15g5tqx5nyAJQTA',
      maxEvents: 1,
      events: [
        {
          id: 'logo-design',
          name: 'Logo Design/Poster Design',
          time: '1:30 PM - 2:30 PM',
          icon: '✏️',
          formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfwMmHSmR_pHJ9iglQAX7nOLQlGdJNAyMgDUQSbSthKRk2b8Q/viewform?usp=publish-editor',
          rules: [
            'Individual event',
            'Two rounds: Round 1 - Logo Designing; Round 2 - Poster Designing',
            'Shortlisting from Round 1 to Round 2',
            'Time: 1:30 PM - 2:30 PM'
          ]
        },
        {
          id: 'connections',
          name: 'Connections',
          time: '1:30 PM - 2:30 PM',
          icon: '🧩',
          formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSffczIOsP80WiWpdcEg2HvA9za5oMx5uKb1EwrzPmRKVDewvw/viewform?usp=publish-editor',
          rules: [
            'Team game',
            'Solve visual puzzles',
            'Time limit: 1h'
          ]
        }
      ]
    },
    {
      id: 'cluster4',
      title: 'Treasure Hunt',
      time: '2:30 PM - 3:30 PM',
      color: '#00064f',
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScpTeaSW_pwY3vf3ew3l414u4AJu-su5FGSvXs5aTnl61xlKQ/viewform?usp=publish-editor',
      maxEvents: 1,
      events: [
        {
          id: 'treasure-hunt',
          name: 'Treasure Hunt',
          time: '2:30 PM - 3:30 PM',
          icon: '🏆',
          rules: [
            'Team size: maximum 6 members',
            'Time: 2:30 PM - 3:30 PM',
            'Zone: only on G 9',
            'Total treasures: 6',
            'Solve clues in campus; first team wins'
          ]
        }
      ]
    }
  ];

  const handleRegister = (formUrl: string, eventId?: string) => {
    let url = formUrl;
    if (eventId) {
      url += (formUrl.includes('?') ? '&' : '?') + `event=${encodeURIComponent(eventId)}`;
    }
    window.open(url, '_blank');
  };

  const showTooltip = (e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>, ev: EventItem) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltipPos({ top: rect.top - 8 - window.scrollY, left: rect.left + rect.width / 2 });
    setTooltipEvent(ev);
    setHoveredEventId(ev.id);
  };

  const hideTooltip = () => {
    setTooltipEvent(null);
    setTooltipPos(null);
    setHoveredEventId(null);
  };

  const getFormUrlForEvent = (eventId: string) => {
    for (const c of eventClusters) {
      const event = c.events.find(e => e.id === eventId);
      if (event?.formUrl) {
        return event.formUrl;
      }
    }
    
    for (const c of eventClusters) {
      if (c.events.some(e => e.id === eventId)) return c.formUrl;
    }
    
    return eventClusters[0]?.formUrl || '';
  };

  const getStartMinutes = (timeRange: string) => {
    const match = timeRange.match(/^\s*(\d{1,2}:?\d{0,2})\s*(AM|PM)/i);
    if (!match) return 0;
    const [, time, ampm] = match;
    const parts = time.split(':').map(Number);
    let h = parts[0];
    const m = parts[1] || 0;
    if (ampm.toUpperCase() === 'PM' && h !== 12) h += 12;
    if (ampm.toUpperCase() === 'AM' && h === 12) h = 0;
    return h * 60 + m;
  };

  const sortedClusters = [...eventClusters].sort((a, b) => getStartMinutes(a.time) - getStartMinutes(b.time));

  return (
    <div className="event-registration-container">
      <Navbar />

      <div className="header">
        <h1>Event Registration</h1>
        <p>Register for exciting events happening today!</p>
      </div> 

      <div className="content-wrapper">
        <div className="form-container">
          {sortedClusters.map(cluster => (
            <div
              key={cluster.id}
              className={`cluster cluster-${cluster.id.slice(-1)}`}
              style={{ borderLeftColor: cluster.color }}
            >
              <div className="cluster-title">
                <h2>{cluster.title}</h2>
                <span className="time-badge" style={{ backgroundColor: cluster.color }}>
                  {cluster.time}
                </span>
              </div>

              <p className="registration-note">
                👉 You can register for {cluster.maxEvents} {cluster.maxEvents > 1 ? 'events' : 'event'} in this slot.
              </p>

              <div className="events-container">
                {cluster.events.map(event => (
                  <div
                    key={event.id}
                    className="event-item"
                  >
                    <div className="event-icon">{event.icon}</div>
                    <div className="event-details">
                      <div className="event-name">{event.name}</div>
                      <div className="event-time">{event.time}</div>
                    </div>

                    <div className="event-actions">
                      <button
                        type="button"
                        className="event-details-btn"
                        onClick={() => openDetails(event)}
                        aria-label={`Show details for ${event.name}`}
                      >
                        Details
                      </button>

                      <button
                        type="button"
                        className="event-register-btn"
                        onClick={() => handleRegister(event.formUrl || cluster.formUrl, event.id)}
                        style={{ backgroundColor: cluster.color }}
                      >
                        Register
                      </button>
                    </div>

                    {selectedEvent?.id === event.id && (
                      <div className="incard-overlay" onClick={closeDetails}>
                        <div className="incard-details" onClick={(e) => e.stopPropagation()}>
                          <header className="incard-header">
                            <h3>{selectedEvent.name}</h3>
                            <button ref={closeBtnRef} type="button" className="incard-close" onClick={closeDetails} aria-label="Close">✕</button>
                          </header>
                          <div className="incard-body">
                            <p className="modal-time">Time: <strong>{selectedEvent.time}</strong></p>
                            {selectedEvent.rules && (
                              <div className="modal-rules">
                                <h4>Guidelines</h4>
                                <ul>
                                  {selectedEvent.rules.map((r, i) => <li key={i}>{r}</li>)}
                                </ul>
                              </div>
                            )}
                          </div>
                          <div className="incard-actions">
                            <button 
                              className="event-register-btn" 
                              style={{ backgroundColor: cluster.color }}
                              onClick={() => { 
                                closeDetails(); 
                                handleRegister(getFormUrlForEvent(event.id), event.id); 
                              }}
                            >
                              Register for this event
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .event-registration-container {
          --primary: #203a9f;
          --secondary: #00064f;
          --light: #e9ecef;
          --dark: #2b2b2b;
          --gray: #6d6d6d;
          --border-radius: 12px;
          --box-shadow: 0 8px 20px rgba(0, 6, 79, 0.12);
          --transition: all 0.3s ease;
        }
        .event-registration-container *, .event-registration-container *::before, .event-registration-container *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .event-registration-container {
          background: linear-gradient(135deg, #e9ecef 0%, #f1f3f5 100%);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .content-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        .header {
          background: linear-gradient(135deg, var(--secondary), var(--primary));
          color: #ffffff;
          padding: 25px;
          text-align: center;
          width: 100%;
          max-width: 900px;
          border-radius: var(--border-radius) var(--border-radius) 0 0;
          margin-bottom: 0;
        }
        .header h1 {
          font-size: 2.2rem;
          margin-bottom: 10px;
        }
        .header p {
          opacity: 0.9;
          margin-bottom: 15px;
        }

        .form-container {
          padding: 30px;
          width: 100%;
          max-width: 900px;
          background: #ffffff;
          border-radius: 0 0 var(--border-radius) var(--border-radius);
        }
        .cluster {
          background: var(--light);
          border-radius: var(--border-radius);
          padding: 25px;
          margin-bottom: 25px;
          box-shadow: var(--box-shadow);
          border-left: 5px solid;
          transition: var(--transition);
          animation: slideIn 0.5s ease;
        }
        .cluster:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 28px rgba(0,6,79,0.18);
        }
        .cluster-title {
          color: var(--secondary);
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 2px solid var(--secondary);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cluster-title h2 {
          font-size: 1.5rem;
        }
        .time-badge {  
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .registration-note {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--dark);
          margin-bottom: 15px;
          background: rgba(0,0,0,0.05);
          padding: 8px 12px;
          border-radius: 6px;
        }
        .events-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }
        .event-item {
          background: #ffffff;
          border-radius: 8px;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: 100%;
          box-shadow: 0 3px 10px rgba(0, 6, 79, 0.10);
          transition: var(--transition);
          position: relative;
        }
        .event-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 6, 79, 0.16);
        }
        .event-icon {
          font-size: 2rem;
          margin-right: 15px;
        }
        .event-details {
          flex: 1;
        }
        .event-name {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 5px;
          color: var(--dark);
        }
        .event-time {
          color: var(--gray);
          font-size: 0.9rem;
        }
        .incard-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.36);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          border-radius: 8px;
        }
        .incard-details {
          background: white;
          width: min(520px, 90%);
          max-height: 80vh;
          overflow-y: auto;
          border-radius: 12px;
          padding: 18px;
          box-shadow: 0 18px 40px rgba(0,6,79,0.25);
          position: relative;
          animation: slideUp 0.25s ease;
        }
        .incard-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .incard-header h3 { margin: 0; color: var(--primary); }
        .incard-close { background: transparent; border: none; font-size: 1.1rem; cursor: pointer; color: var(--gray); }
        .incard-body { color: var(--dark); font-size: 0.95rem; }
        .incard-actions { margin-top: 12px; display: flex; justify-content: flex-end; gap: 8px; }
        @media (max-width: 480px) { .incard-details { width: calc(100% - 20px); padding: 14px; } }

        .event-tooltip {
          position: absolute;
          top: 100%;
          left: 10px;
          z-index: 10;
          background: white;
          color: black;
          padding: 12px 16px;
          border-radius: 8px;
          box-shadow: 0 4px 16px rgba(0, 6, 79, 0.15);
          width: 220px;
          margin-top: 6px;
          font-size: 0.9rem;
          transition: opacity 0.2s ease;
        }
        .event-tooltip h4 {
          margin-bottom: 8px;
          font-weight: bold;
        }
        .event-tooltip ul {
          padding-left: 18px;
          margin: 0;
        }
        .event-register-btn {
          color: #ffffff;
          padding: 8px 12px;
          border-radius: 10px;
          font-weight: 700;
          cursor: pointer;
          border: none;
          margin-left: 12px;
          transition: var(--transition);
          box-shadow: 0 4px 10px rgba(0, 6, 79, 0.12);
        }
        .event-register-btn:hover {
          transform: translateY(-2px);
          filter: brightness(0.95);
        }
        .btn-register {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: #ffffff;
          padding: 12px 25px;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          display: block;
          margin-left: auto;
          box-shadow: 0 4px 12px rgba(32, 58, 159, 0.35);
        }
        .btn-register:hover {
          background: linear-gradient(135deg, var(--secondary), var(--primary));
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 6, 79, 0.45);
        }
        .btn-register:active {
          transform: translateY(0);
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(50px);} to {opacity: 1; transform: translateY(0);} }
        @keyframes slideIn { from { opacity: 0; transform: translateX(-20px);} to {opacity: 1; transform: translateX(0);} }
        @media (max-width: 768px) {
          .events-container { grid-template-columns: 1fr; }
          .form-container { padding: 20px; }
          .cluster-title { flex-direction: column; align-items: flex-start; gap: 10px; }
          .time-badge { align-self: flex-start; }
          .rules-content { padding: 20px; }
          .content-wrapper { padding: 10px; }
          .event-tooltip {
            left: 5px;
            width: calc(100% - 10px);
          }
        }
      `}</style>
    </div>
  );
};

export default EventRegistration;