import React, { useRef } from 'react';
import Terminal from 'react-console-emulator';

const AboutTerminal = () => {
  const terminalRef = useRef(null);

  // Function to get current date and time
  const getCurrentDate = () => {
    return new Date().toLocaleString();
  };

  // List of random jokes
  const jokes = [
    "Why don't programmers like nature? It has too many bugs!",
    "There are 10 kinds of people in the world: those who understand binary and those who don't.",
    "How many programmers does it take to change a light bulb? None, that's a hardware issue!"
  ];

  // Function to get a random joke
  const getRandomJoke = () => {
    return jokes[Math.floor(Math.random() * jokes.length)];
  };

  // Function to process math expressions
  const evaluateMath = (expression) => {
    try {
      return eval(expression);
    } catch (error) {
      return "Invalid expression!";
    }
  };

  // Define terminal commands
  const commands = {
    help: {
      description: 'Lists available commands',
      usage: 'help',
      fn: () => 'Available commands: help, greet, echo, clear, date, joke, math, whoami',
    },
    greet: {
      description: 'Greets the user',
      usage: 'greet',
      fn: () => 'Hello! How are you today?',
    },
    echo: {
      description: 'Echoes the input text',
      usage: 'echo <text>',
      fn: (...args) => args.join(' '),
    },
    clear: {
      description: 'Clears the terminal',
      usage: 'clear',
      fn: () => {
        if (terminalRef.current) {
          terminalRef.current.clearStdout();
        }
        return '';
      },
    },
    date: {
      description: 'Displays the current date and time',
      usage: 'date',
      fn: () => getCurrentDate(),
    },
    joke: {
      description: 'Tells a random joke',
      usage: 'joke',
      fn: () => getRandomJoke(),
    },
    math: {
      description: 'Evaluates a math expression',
      usage: 'math <expression>',
      fn: (...args) => evaluateMath(args.join(' ')),
    },
    whoami: {
      description: 'Returns a fun identity message',
      usage: 'whoami',
      fn: () => 'You are an awesome developer using this terminal!',
    }
  };

  return (
    <div style={styles.terminalContainer}>
      <Terminal
        ref={terminalRef}
        commands={commands}
        welcomeMessage={'Welcome to my terminal simulator! Type "help" for available commands.'}
        promptLabel={'radutaica@github:~$'}
        autoFocus
        noDefaults={true}
        promptLabelStyle={styles.promptLabel}
        style={styles.terminal}
        inputStyle={styles.input}
        messageStyle={styles.message}
      />
    </div>
  );
};

// Styles for the terminal and its elements
const styles = {
  terminalContainer: {
    width: '100%',
    height: '100%',
    border: '1px solid #1E2D3D',
    borderRadius: '5px',
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  terminal: {
    backgroundColor: 'black',
    fontFamily: 'monospace',
    fontSize: '16px',
    padding: '10px',
    height: '100%',
    width: '100%',
    overflowY: 'auto',
  },
  promptLabel: {
    color: '#00ff00', // Green prompt label like a traditional terminal
  },
  input: {
    color: '#00ffff', // Cyan input text
    fontFamily: 'monospace',
  },
  message: {
    color: '#ffffff', // White output text
  },
};

export default AboutTerminal;
