 import React, { useState } from 'react';
 import Navbar from '@/components/Navbar';

interface EventCluster {
  id: string;
  title: string;
  time: string;
  color: string;
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
      color: '#4361ee',
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
      color: '#f72585',
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
      color: '#4cc9f0',
      events: [
        { id: 'logo-design', name: 'Logo Design/Poster Design', time: '1:30 PM - 2:30 PM', icon: '✏️' },
        { id: 'connections', name: 'Connections', time: '1:30 PM - 2:30 PM', icon: '🧩' }
      ]
    },
    {
      id: 'cluster4',
      title: 'Treasure Hunt',
      time: '2:30 PM - 3:30 PM',
      color: '#f9c74f',
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

  const handleRegister = (clusterId: string) => {
    const eventId = selectedEvents[clusterId];
    if (eventId) {
      alert(`Registered for ${eventId} in ${clusterId}`);
    } else {
      alert('Please select an event first');
    }
  };

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  return (
    <div className="event-registration">
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
      
      <div className="clusters-container">
        {eventClusters.map(cluster => (
          <div 
            key={cluster.id} 
            className="cluster"
            style={{ borderLeftColor: cluster.color }}
          >
            <div className="cluster-header">
              <h2>{cluster.title}</h2>
              <span className="time-badge" style={{ backgroundColor: cluster.color }}>
                {cluster.time}
              </span>
            </div>
            
            <div className="events-grid">
              {cluster.events.map(event => (
                <div 
                  key={event.id}
                  className={`event-card ${selectedEvents[cluster.id] === event.id ? 'selected' : ''}`}
                  onClick={() => handleEventSelect(cluster.id, event.id)}
                  style={{ borderColor: cluster.color }}
                >
                  <div className="event-icon">{event.icon}</div>
                  <div className="event-name">{event.name}</div>
                  <div className="event-time">{event.time}</div>
                </div>
              ))}
            </div>
            
            <button 
              className="register-btn"
              onClick={() => handleRegister(cluster.id)}
              style={{ backgroundColor: cluster.color }}
            >
              Register for {cluster.title}
            </button>
          </div>
        ))}
      </div>
      
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .event-registration {
          background: linear-gradient(135deg, #ccafebff 0%, #7fcdcdff 100%);
          min-height: 100vh;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .header {
          text-align: center;
          color: white;
          margin-bottom: 30px;
          max-width: 800px;
          position: relative;
        }
        
        .header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          font-weight: 700;
        }
        
        .header p {
          font-size: 1.2rem;
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
          transition: all 0.3s ease;
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
          color: #92a0daff;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .rules-list h3 {
          color: #816bb3ff;
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
          background: #87e3edff;
          color: white;
          border: none;
          padding: 10px 25px;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          display: block;
          margin: 20px auto 0;
          transition: all 0.3s ease;
        }
        
        .close-rules:hover {
          background: #8e7db5ff;
          transform: translateY(-2px);
        }
        
        .clusters-container {
          width: 100%;
          max-width: 1000px;
        }
        
        .cluster {
          background: white;
          border-radius: 15px;
          padding: 25px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-left: 5px solid;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .cluster:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }
        
        .cluster-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #eee;
        }
        
        .cluster-header h2 {
          color: #333;
          font-size: 1.5rem;
        }
        
        .time-badge {
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .events-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }
        
        .event-card {
          background: #f8f9fa;
          border-radius: 12px;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .event-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        
        .event-card.selected {
          background: rgba(67, 97, 238, 0.1);
          border-color: #7eafe3ff;
        }
        
        .event-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }
        
        .event-name {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 8px;
          color: #333;
        }
        
        .event-time {
          color: #666;
          font-size: 0.9rem;
        }
        
        .register-btn {
          color: white;
          border: none;
          padding: 12px 30px;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: block;
          margin: 0 auto;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .register-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        
        .register-btn:active {
          transform: translateY(0);
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
        
        @media (max-width: 768px) {
          .cluster-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          
          .time-badge {
            align-self: flex-start;
          }
          
          .events-grid {
            grid-template-columns: 1fr;
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