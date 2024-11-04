import React from 'react';
import Terminal from 'react-console-emulator'

const AboutTerminal = () => {
  // Define the commands you want to implement
  const commands = {
    help: {
      description: 'Lists available commands',
      usage: 'help',
      fn: () => 'Available commands: help, greet, echo, clear',
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
        return ''; // The terminal will automatically clear the output
      },
    },
  };

  return (
    <div style={styles.terminalContainer}>
      <Terminal
        commands={commands}
        welcomeMessage={'Welcome to my terminal simulator! Type "help" for available commands.'}
        promptLabel={'radutaica@github:~$'}
        autoFocus
        noDefaults={true} 
      />
    </div>
  );
};

// Styles for the terminal container
const styles = {
  terminalContainer: {
    width: '100%',
    height: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#000',
  },
};

export default AboutTerminal;
