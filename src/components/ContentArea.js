import React from 'react';
import '../css/ContentArea.css';

const ContentArea = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case '/about/education/bachelor':
        return <div><h1>Bachelor's Degree Information</h1><p>Details about the Bachelor's degree.</p></div>;
      case '/about/education/masters':
        return <div><h1>Master's Degree Information</h1><p>Details about the Master's degree.</p></div>;
      case '/about/work/job1':
        return <div><h1>Job 1 Information</h1><p>Details about Job 1.</p></div>;
      case '/about/work/job2':
        return <div><h1>Job 2 Information</h1><p>Details about Job 2.</p></div>;
      default:
        return <div><h1>Welcome to the About Page</h1><p>Select a tab to see details.</p></div>;
    }
  };

  return (
    <div className="content-area">
      {renderContent()}
    </div>
  );
};

export default ContentArea;
