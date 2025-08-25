import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

interface EventCluster {
  id: string;
  title: string;
  time: string;
  color: string;
  formUrl: string;
  events: EventItem[];
}

interface EventItem {
  id: string;
  name: string;
  time: string;
  icon: string;
}

const EventRegistration: React.FC = () => {
  const [selectedEvents, setSelectedEvents] = useState<Record<string, string>>({});
  const [showRules, setShowRules] = useState(false);

  const eventClusters: EventCluster[] = [
    {
      id: 'cluster1',
      title: 'Morning Events',
      time: '9:00 AM - 10:30 AM',
      color: '#203a9f',
      formUrl: 'https://forms.gle/pHnFCTRNCKSEED3V8',
      events: [
        { id: 'paper-presentation', name: 'Paper Presentation', time: '9:30 AM - 10:30 AM', icon: '📝' },
        { id: 'project-presentation', name: 'Project Presentation', time: '9:30 AM - 10:30 AM', icon: '💻' },
        { id: 'video-editing', name: 'Video Editing', time: '9:00 AM - 10:00 AM', icon: '🎬' }
      ]
    },
    {
      id: 'cluster2',
      title: 'Late Morning Events',
      time: '11:00 AM - 12:30 PM',
      color: '#6f7ccd',
      formUrl: 'https://forms.gle/pm8Mak7Sc52tEL4Y8',
      events: [
        { id: 'ui-ux-design', name: 'UI/UX Design using Figma', time: '11:00 AM - 12:30 PM', icon: '🎨' },
        { id: 'code-debugging', name: 'Code Debugging', time: '11:00 AM - 12:30 PM', icon: '🐛' },
        { id: 'cad-tinker', name: 'CAD/Tinker CAD', time: '11:00 AM - 12:30 PM', icon: '🛠️' }
      ]
    },
    {
      id: 'cluster3',
      title: 'Afternoon Events',
      time: '1:30 PM - 2:30 PM',
      color: '#1e2adb',
      formUrl: 'https://forms.gle/ti15g5tqx5nyAJQTA',
      events: [
        { id: 'logo-design', name: 'Logo Design/Poster Design', time: '1:30 PM - 2:30 PM', icon: '✏️' },
        { id: 'connections', name: 'Connections', time: '1:30 PM - 2:30 PM', icon: '🧩' }
      ]
    },
    {
      id: 'cluster4',
      title: 'Treasure Hunt',
      time: '2:30 PM - 3:30 PM',
      color: '#00064f',
      formUrl: 'https://forms.gle/oT2KW9dsRAFc92Sh6',
      events: [
        { id: 'treasure-hunt', name: 'Treasure Hunt', time: '2:30 PM - 3:30 PM', icon: '🏆' }
      ]
    }
  ];

  const handleEventSelect = (clusterId: string, eventId: string) => {
    setSelectedEvents(prev => ({
      ...prev,
      [clusterId]: eventId
    }));
  };

  const handleRegister = (clusterId: string, formUrl: string) => {
    const eventId = selectedEvents[clusterId];
    if (eventId) {
      // Redirect to the Google Form
      window.open(formUrl, '_blank');
    } else {
      alert('Please select an event first');
    }
  };

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div className="event-registration-container">
      <Navbar />
      <div className="header">
        <h1>Event Registration</h1>
        <p>Register for exciting events happening today!</p>
        <button className="rules-btn" onClick={toggleRules}>
          📋 Event Rules
        </button>
      </div>
      
      {showRules && (
        <div className="rules-modal">
          <div className="rules-content">
            <h2>Event Rules & Guidelines</h2>
            <div className="rules-list">
              <h3>General Rules:</h3>
              <ul>
                <li>All participants must register before the event starts</li>
                <li>Each participant can register for one event per time slot</li>
                <li>Participants must arrive 15 minutes before their event</li>
                <li>Judges' decisions are final</li>
              </ul>
              
              <h3>Technical Events:</h3>
              <ul>
                <li>Bring your own laptop for coding events</li>
                <li>Pre-install required software (Figma, CAD tools, etc.)</li>
                <li>Internet access will be provided but limited</li>
              </ul>
              
              <h3>Presentation Events:</h3>
              <ul>
                <li>Time limit: 10 minutes presentation + 5 minutes Q&A</li>
                <li>Bring your presentation on a USB drive</li>
                <li>PPT/PDF format only</li>
              </ul>
            </div>
            <button className="close-rules" onClick={toggleRules}>Close</button>
          </div>
        </div>
      )}
      
      <div className="form-container">
        {eventClusters.map(cluster => (
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
            
            <div className="events-container">
              {cluster.events.map(event => (
                <div 
                  key={event.id}
                  className={`event-item ${selectedEvents[cluster.id] === event.id ? 'selected' : ''}`}
                  onClick={() => handleEventSelect(cluster.id, event.id)}
                >
                  <div className="event-icon">{event.icon}</div>
                  <div className="event-details">
                    <div className="event-name">{event.name}</div>
                    <div className="event-time">{event.time}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="btn-register"
              onClick={() => handleRegister(cluster.id, cluster.formUrl)}
              style={{ backgroundColor: cluster.color }}
              disabled={!selectedEvents[cluster.id]}
            >
              Register for {cluster.title}
            </button>
          </div>
        ))}
      </div>
      
      <style>{`
        .event-registration-container {
          --primary: #203a9f;
          --secondary: #00064f;
          --accent: #6f7ccd;
          --light: #e9ecef;
          --dark: #2b2b2b;
          --success: #1e2adb;
          --warning: #d6a444;
          --danger: #d9534f;
          --gray: #6d6d6d;
          --border-radius: 12px;
          --box-shadow: 0 8px 20px rgba(0, 6, 79, 0.12);
          --transition: all 0.3s ease;
        }
        
        .event-registration-container * {
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
        
        .rules-btn {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid white;
          padding: 10px 20px;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          backdrop-filter: blur(5px);
        }
        
        .rules-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }
        
        .rules-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }
        
        .rules-content {
          background: white;
          border-radius: 15px;
          padding: 30px;
          max-width: 600px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.4s ease;
        }
        
        .rules-content h2 {
          color: var(--primary);
          margin-bottom: 20px;
          text-align: center;
        }
        
        .rules-list h3 {
          color: var(--secondary);
          margin: 15px 0 10px;
        }
        
        .rules-list ul {
          margin-left: 20px;
          margin-bottom: 15px;
        }
        
        .rules-list li {
          margin-bottom: 8px;
          line-height: 1.5;
        }
        
        .close-rules {
          background: var(--primary);
          color: white;
          border: none;
          padding: 10px 25px;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          display: block;
          margin: 20px auto 0;
          transition: var(--transition);
        }
        
        .close-rules:hover {
          background: var(--secondary);
          transform: translateY(-2px);
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
          box-shadow: 0 4px 12px rgba(32, 58, 159, 0.10);
          border-left: 5px solid;
          transition: var(--transition);
          animation: slideIn 0.5s ease;
        }
        
        .cluster:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 28px rgba(0, 6, 79, 0.18);
        }
        
        .cluster-title {
          color: var(--secondary);
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 2px solid var(--secondary);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .cluster-title h2 {
          color: var(--secondary);
          font-size: 1.5rem;
        }
        
        .time-badge {
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .events-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .event-item {
          background: #ffffff;
          border-radius: 8px;
          padding: 15px;
          display: flex;
          align-items: center;
          box-shadow: 0 3px 10px rgba(0, 6, 79, 0.10);
          transition: var(--transition);
          cursor: pointer;
        }
        
        .event-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(0, 6, 79, 0.16);
        }
        
        .event-item.selected {
          background: rgba(32, 58, 159, 0.1);
          border: 1px solid var(--primary);
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
        
        .btn-register {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: #ffffff;
          border: none;
          padding: 12px 25px;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          display: block;
          margin-left: auto;
          box-shadow: 0 4px 12px rgba(32, 58, 159, 0.35);
        }
        
        .btn-register:hover:not(:disabled) {
          background: linear-gradient(135deg, var(--secondary), var(--primary));
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 6, 79, 0.45);
        }
        
        .btn-register:active:not(:disabled) {
          transform: translateY(0);
        }
        
        .btn-register:disabled {
          background: var(--gray);
          cursor: not-allowed;
          opacity: 0.7;
          transform: none;
          box-shadow: none;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(50px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @media (max-width: 768px) {
          .events-container {
            grid-template-columns: 1fr;
          }
          
          .form-container {
            padding: 20px;
          }
          
          .cluster-title {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          
          .time-badge {
            align-self: flex-start;
          }
          
          .rules-content {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default EventRegistration;