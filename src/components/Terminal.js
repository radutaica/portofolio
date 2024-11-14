import React from 'react';
import Terminal from 'react-console-emulator';

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
        promptLabelStyle={styles.promptLabel} // Custom prompt label style
        style={styles.terminal} // General terminal styles
        inputStyle={styles.input} // Input text style
        messageStyle={styles.message} // Output message style
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
  },
  terminal: {
    backgroundColor: 'black',
    fontFamily: 'monospace',
    fontSize: '16px',
    padding: '10px',
    height: '100%'
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
