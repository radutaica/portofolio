import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/ContentArea.css';  // CSS for content area

const ContentArea = () => {
  const location = useLocation();

  return (
    <div className="content-area">
      {location.pathname.includes('/about/education/bachelor') && <Bachelor />}
      {location.pathname.includes('/about/education/masters') && <Masters />}
      {location.pathname.includes('/about/work/job1') && <Job1 />}
      {location.pathname.includes('/about/work/job2') && <Job2 />}
    </div>
  );
};

// Example content components
const Bachelor = () => <div><h2>Bachelor's Degree</h2><p>Details about your bachelor's degree.</p></div>;
const Masters = () => <div><h2>Master's Degree</h2><p>Details about your master's degree.</p></div>;
const Job1 = () => <div><h2>Job 1</h2><p>Details about Job 1.</p></div>;
const Job2 = () => <div><h2>Job 2</h2><p>Details about Job 2.</p></div>;

export default ContentArea;
