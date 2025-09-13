import React from 'react';
import Navigation from '@/components/Navigation';
import { TerminalButton } from '@/components/ui/terminal-button';
import { Shield, Zap, Target, AlertTriangle, Lock, Users } from 'lucide-react';

const Intel = () => {
  const intelReports = [
    {
      id: 'R001',
      classification: 'CONFIDENTIAL',
      title: 'Advanced Tactical Procurement Protocols',
      summary: 'Updated guidelines for high-value asset acquisition and deployment procedures.',
      status: 'ACTIVE',
      clearance: 'LEVEL 3'
    },
    {
      id: 'R002',
      classification: 'RESTRICTED',
      title: 'Regulatory Compliance Framework',
      summary: 'Current federal and state compliance requirements for tactical equipment.',
      status: 'UPDATED',
      clearance: 'LEVEL 2'
    },
    {
      id: 'R003',
      classification: 'SECRET',
      title: 'Next-Generation Platform Analysis',
      summary: 'Technical assessment of emerging tactical technologies and integration potential.',
      status: 'CLASSIFIED',
      clearance: 'LEVEL 4'
    }
  ];

  const capabilities = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'SECURE PROTOCOLS',
      description: 'End-to-end encrypted communications and data protection'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'PRECISION TARGETING',
      description: 'Advanced ballistic calculations and trajectory optimization'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'RAPID DEPLOYMENT',
      description: 'Streamlined logistics for immediate operational readiness'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'ACCESS CONTROL',
      description: 'Multi-factor authentication and biometric verification'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'TEAM COORDINATION',
      description: 'Real-time tactical communication and coordination systems'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'THREAT ASSESSMENT',
      description: 'Advanced threat detection and risk mitigation protocols'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-orbitron font-bold text-primary mb-4 tracking-wide">
              [INTELLIGENCE BRIEFING]
            </h1>
            <p className="text-xl font-mono text-secondary tracking-wider mb-6">
              {'&gt;'} CLASSIFIED TACTICAL INFORMATION
            </p>
            <div className="w-32 h-1 bg-primary mx-auto animate-scan-line"></div>
          </div>

          {/* Security Notice */}
          <div className="terminal-border p-6 mb-12 bg-destructive/10 border-destructive/50">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-mono font-bold text-destructive mb-2 tracking-wide">
                  [SECURITY CLEARANCE REQUIRED]
                </h3>
                <p className="font-mono text-sm text-destructive/80">
                  Access to classified intelligence requires proper authorization. 
                  Unauthorized access attempts are logged and may result in prosecution 
                  under applicable federal statutes.
                </p>
              </div>
            </div>
          </div>

          {/* Intelligence Reports */}
          <div className="mb-16">
            <h2 className="text-3xl font-orbitron font-bold text-secondary mb-8 tracking-wide">
              [ACTIVE INTELLIGENCE REPORTS]
            </h2>
            
            <div className="space-y-4">
              {intelReports.map((report) => (
                <div key={report.id} className="terminal-border p-6 hover:border-primary/60 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                      <span className="font-mono text-sm text-accent">
                        [{report.id}]
                      </span>
                      <span className={`font-mono text-xs px-2 py-1 rounded ${
                        report.classification === 'SECRET' ? 'bg-destructive/20 text-destructive' :
                        report.classification === 'CONFIDENTIAL' ? 'bg-accent/20 text-accent' :
                        'bg-secondary/20 text-secondary'
                      }`}>
                        {report.classification}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        CLEARANCE: {report.clearance}
                      </span>
                    </div>
                    <span className={`font-mono text-xs px-2 py-1 rounded ${
                      report.status === 'CLASSIFIED' ? 'bg-destructive/20 text-destructive' :
                      report.status === 'UPDATED' ? 'bg-accent/20 text-accent' :
                      'bg-secondary/20 text-secondary'
                    }`}>
                      [{report.status}]
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-rajdhani font-bold text-primary mb-3 tracking-wide">
                    {report.title}
                  </h3>
                  
                  <p className="font-mono text-sm text-muted-foreground mb-4">
                    {report.summary}
                  </p>
                  
                  <TerminalButton 
                    variant="outline" 
                    size="sm"
                    className={report.status === 'CLASSIFIED' ? 'opacity-50 cursor-not-allowed' : ''}
                    disabled={report.status === 'CLASSIFIED'}
                  >
                    {report.status === 'CLASSIFIED' ? '[ACCESS DENIED]' : '[REQUEST ACCESS]'}
                  </TerminalButton>
                </div>
              ))}
            </div>
          </div>

          {/* Tactical Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-orbitron font-bold text-secondary mb-8 tracking-wide">
              [TACTICAL CAPABILITIES MATRIX]
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="terminal-border p-6 group hover:bg-primary/5">
                  <div className="text-primary mb-4 group-hover:animate-pulse">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-rajdhani font-bold text-secondary mb-3 tracking-wide">
                    {capability.title}
                  </h3>
                  <p className="text-sm font-mono text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Access Request */}
          <div className="terminal-border p-8 text-center bg-surface/30">
            <h3 className="text-2xl font-orbitron font-bold text-primary mb-4 tracking-wide">
              [REQUEST ENHANCED ACCESS]
            </h3>
            <p className="font-mono text-muted-foreground mb-6">
              {'&gt;'} Higher clearance levels provide access to advanced tactical intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <TerminalButton variant="primary" size="lg">
                SUBMIT CLEARANCE REQUEST
              </TerminalButton>
              <TerminalButton variant="outline" size="lg">
                CONTACT SECURITY OFFICER
              </TerminalButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intel;