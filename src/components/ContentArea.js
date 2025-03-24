import React, { useState } from 'react';
import '../css/ContentArea.css';

const ContentArea = ({ activeTab }) => {
  const [selectedLine, setSelectedLine] = useState(null);

  const handleLineClick = (index) => {
    setSelectedLine(index);
  };

  const renderCodeLines = (lines) => {
    return (
      <div className="code-block font-mono pr-0">
        <div
          className={`code-line ${selectedLine === 0 ? 'selected' : ''}`}
          onClick={() => handleLineClick(0)}
        >
          <span className="line-number text-xs md:text-sm text-[#607B96]">1</span>
          <span className="code-text text-sm md:text-base">/**</span>
        </div>
        {lines.map((line, index) => (
          <div
            className={`code-line ${selectedLine === index + 1 ? 'selected' : ''}`}
            key={index + 1}
            onClick={() => handleLineClick(index + 1)}
          >
            <span className="line-number text-xs md:text-sm text-[#607B96]">{index + 2}</span>
            <span className="code-text text-sm md:text-base">* {line}</span>
          </div>
        ))}
        <div
          className={`code-line ${selectedLine === lines.length + 1 ? 'selected' : ''}`}
          onClick={() => handleLineClick(lines.length + 1)}
        >
          <span className="line-number text-xs md:text-sm text-[#607B96]">{lines.length + 2}</span>
          <span className="code-text text-sm md:text-base">*/</span>
        </div>
      </div>
    );
  };

  const getContentLines = () => {
    switch (activeTab) {
      case '/about/education/bachelor':
        return [
          'Bachelors',
          'Bachelor of Science with Honours in Computer Science,',
          'Grade: Class I',
          'City University of London',
          'September 2019 - June 2022',
          '',
          'Modules:',
          '• Introduction to Algorithms',
          '• Mathematics for Computing',
          '• Systems Architecture',
          '• Programming in Java',
          '• Databases',
          '• Operating Systems',
          '• Data Structures and Algorithms',
          '• Language Processors',
          '• Computer Networks',
          '• Object-Oriented Analysis and Design',
          '• Programming in C++',
          '• Advanced Programming: Concurrency',
          '• Functional Programming',
          '• Games Technology'
        ];
      case '/about/work/job1':
        return [
          'TakeOff Labs',
          'Full Stack Developer',
          'November 2022 - Present',
          '',
          'Tech Stack:',
          '• Ruby on Rails',
          '• Node.js',
          '• React.js',
          '• React-Native',
          '• AWS',
          '• Stripe',
          '• Git',
          '• PostgreSQL',
          '• Redis',
          '• SideKiq',
          '• CLI',
          '• EAS',
          '• Expo'
        ];
      default:
        return [
          'ABOUT ME',
          '',
          'Radu Taica, 24',
          'Cluj-Napoca, Romania',
          '',
          'I am a problem solver who is interested in solving',
          'everything tech. My main background and projects are in Web',
          'and Mobile Development, which I had the pleasure of working',
          'on during my studies and at my work. I like to work in teams',
          'and make meaningful contributions with like-minded people.',
          '',
          'When I am not coding, you will find me at the gym most',
          'likely (if you have any crazy calves routine please text',
          'it to me) or enjoying some FPS games.',
          '',
          'Feel free to drop a message if you want to talk about tech,',
          'lifting, or if you want to team up for a game. I am always',
          'up for a good conversation!'
        ];
    }
  };

  return (
    <div className="h-full bg-[#011627] text-[#607B96]">
      <div className="h-full overflow-y-auto">
        <div className="p-4 md:p-8">
          <div className="code-block font-mono pl-4">
            {renderCodeLines(getContentLines())}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentArea;
