import React, { useState, useEffect } from 'react';

interface TerminalInitializerProps {
  onComplete: () => void;
}

const TerminalInitializer: React.FC<TerminalInitializerProps> = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const initSequence = [
    "> SYSTEM INITIATION...",
    "> LOADING TACTICAL PROTOCOLS...",
    "> BIOMETRIC SCAN BYPASSED...",
    "> NETWORK SECURITY: ENABLED",
    "> ENCRYPTION LEVEL: CLASSIFIED",
    "> ACCESS GRANTED: OPERATIVE STATUS",
    "> WELCOME TO NEXUS ARMAMENT",
    "> TERMINAL READY..."
  ];

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLine < initSequence.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 800);

      return () => clearTimeout(timer);
    } else {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1500);

      return () => clearTimeout(completeTimer);
    }
  }, [currentLine, onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="w-full max-w-2xl p-8">
        <div className="space-y-4">
          {initSequence.slice(0, currentLine).map((line, index) => (
            <div
              key={index}
              className="font-mono text-secondary tracking-wider text-lg opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {line}
            </div>
          ))}
          {currentLine < initSequence.length && (
            <div className="font-mono text-secondary tracking-wider text-lg flex">
              <span className="animate-terminal-text overflow-hidden whitespace-nowrap">
                {initSequence[currentLine]}
              </span>
              {showCursor && <span className="text-primary animate-pulse">_</span>}
            </div>
          )}
        </div>
        
        {currentLine >= initSequence.length && (
          <div className="mt-8 text-center">
            <div className="inline-block w-16 h-1 bg-primary animate-scan-line"></div>
            <div className="mt-4 text-accent font-mono text-sm tracking-widest">
              INITIALIZING NEXUS INTERFACE...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalInitializer;