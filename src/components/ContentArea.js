import React, { useState } from 'react';
import '../css/ContentArea.css';

const ContentArea = ({ activeTab }) => {
  const [selectedLine, setSelectedLine] = useState(null);

  const handleLineClick = (index) => {
    setSelectedLine(index);
  };

  const renderCodeLines = (lines) => {
    return (
      <div className="code-block">
        <div
          className={`code-line ${selectedLine === 0 ? 'selected' : ''}`}
          onClick={() => handleLineClick(0)}
        >
          <span className="line-number">1</span> <span className="code-text">/**</span>
        </div>
        {lines.map((line, index) => (
          <div
            className={`code-line ${selectedLine === index + 1 ? 'selected' : ''}`}
            key={index + 2}
            onClick={() => handleLineClick(index + 1)}
          >
            <span className="line-number">{index + 2}</span>{' '}
            <span className="code-text">* {line}</span>
          </div>
        ))}
        <div
          className={`code-line ${selectedLine === lines.length + 1 ? 'selected' : ''}`}
          onClick={() => handleLineClick(lines.length + 1)}
        >
          <span className="line-number">{lines.length + 2}</span> <span className="code-text">*/</span>
        </div>
      </div>
    );
  };

  const getContentLines = () => {
    switch (activeTab) {
      case '/about/education/bachelor':
        return ['Bachelor\'s Degree Information', 'Details about the Bachelor\'s degree.'];
      case '/about/education/masters':
        return ['Master\'s Degree Information', 'Details about the Master\'s degree.'];
      case '/about/work/job1':
        return ['Job 1 Information', 'Details about Job 1.'];
      default:
        return ['ABOUT ME', '', 'Radu Taica, 24', 'Cluj-Napoca, Romania', '', 'I am a problem solver who is interested in solving', 'everything tech. My main background and projects are in Web', 'and Mobile Development, which I had the pleasure of working', 'on during my studies and at my work. I like to work in teams', 'and make meaningful contributions with like-minded people.', '', 'When I am not coding, you will find me at the gym most', 'likely (if you have any crazy calves routine please text', 'it to me) or enjoying some FPS games.', '', 'Feel free to drop a message if you want to talk about tech,', 'lifting, or if you want to team up for a game. I am always', 'up for a good conversation!'];
    }
  };

  return (
    <div className="content-area">
      {renderCodeLines(getContentLines())}
    </div>
  );
};

export default ContentArea;
