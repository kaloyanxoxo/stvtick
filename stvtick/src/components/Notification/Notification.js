import React, { useState } from 'react';
import './Notification.css';

function Notification(title, description) {
  const [showNotification, setShowNotification] = useState(true);

  React.useEffect(() => {
    if (!showNotification) return;

    setTimeout(() => setShowNotification(false), 5000);
  }, [showNotification]);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <>
      {showNotification && title && description && (
        <div className="notification">
          <button className="close-button" onClick={handleCloseNotification}>
            x
          </button>
          <div className="notification-content">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Notification;