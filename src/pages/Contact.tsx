import React from 'react';
import Navigation from '@/components/Navigation';
import { TerminalButton } from '@/components/ui/terminal-button';
import { Mail, Phone, MapPin, Clock, Shield, AlertTriangle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'SECURE COMMUNICATIONS',
      value: 'ops@nexusarmament.secure',
      description: 'Encrypted email protocols only'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'TACTICAL HOTLINE',
      value: '+1 (555) NEXUS-OPS',
      description: '24/7 secure voice communications'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'OPERATIONAL HEADQUARTERS',
      value: 'CLASSIFIED LOCATION',
      description: 'Authorized personnel only'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'OPERATIONAL HOURS',
      value: '24/7/365',
      description: 'Continuous tactical support'
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
              [SECURE COMMUNICATIONS]
            </h1>
            <p className="text-xl font-mono text-secondary tracking-wider mb-6">
              {'&gt;'} ESTABLISH TACTICAL CONTACT
            </p>
            <div className="w-32 h-1 bg-primary mx-auto animate-scan-line"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-orbitron font-bold text-secondary mb-8 tracking-wide">
                [COMMUNICATION PROTOCOLS]
              </h2>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="terminal-border p-6 hover:border-primary/60 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary mt-1">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-rajdhani font-bold text-lg text-secondary mb-2 tracking-wide">
                          {method.title}
                        </h3>
                        <div className="font-mono text-primary text-lg mb-2">
                          {method.value}
                        </div>
                        <p className="font-mono text-sm text-muted-foreground">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Security Notice */}
              <div className="mt-8 terminal-border p-6 bg-accent/10 border-accent/50">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono font-bold text-accent mb-2 tracking-wide">
                      [OPSEC PROTOCOLS]
                    </h3>
                    <p className="font-mono text-sm text-accent/80">
                      All communications are monitored and encrypted. Use designated 
                      channels only. Operational security is paramount.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-orbitron font-bold text-secondary mb-8 tracking-wide">
                [SECURE MESSAGE TERMINAL]
              </h2>
              
              <div className="terminal-border p-8 hex-pattern">
                <form className="space-y-6">
                  <div>
                    <label className="block font-mono text-sm text-muted-foreground mb-2">
                      [OPERATIVE DESIGNATION]
                    </label>
                    <input
                      type="text"
                      placeholder="ENTER CODENAME..."
                      className="w-full bg-surface border border-border rounded px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-sm text-muted-foreground mb-2">
                      [CONTACT FREQUENCY]
                    </label>
                    <input
                      type="email"
                      placeholder="SECURE.CHANNEL@DOMAIN.COM"
                      className="w-full bg-surface border border-border rounded px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-sm text-muted-foreground mb-2">
                      [CLEARANCE LEVEL]
                    </label>
                    <select className="w-full bg-surface border border-border rounded px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none">
                      <option>SELECT AUTHORIZATION LEVEL</option>
                      <option>LEVEL 1 - STANDARD</option>
                      <option>LEVEL 2 - CONFIDENTIAL</option>
                      <option>LEVEL 3 - SECRET</option>
                      <option>LEVEL 4 - TOP SECRET</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-sm text-muted-foreground mb-2">
                      [MESSAGE PRIORITY]
                    </label>
                    <select className="w-full bg-surface border border-border rounded px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none">
                      <option>SELECT PRIORITY LEVEL</option>
                      <option>ROUTINE</option>
                      <option>PRIORITY</option>
                      <option>IMMEDIATE</option>
                      <option>FLASH</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-sm text-muted-foreground mb-2">
                      [ENCRYPTED MESSAGE]
                    </label>
                    <textarea
                      rows={6}
                      placeholder="ENTER SECURE MESSAGE CONTENT..."
                      className="w-full bg-surface border border-border rounded px-4 py-3 font-mono text-sm text-foreground focus:border-primary focus:outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="encryption"
                      className="w-4 h-4 text-primary bg-surface border-border rounded focus:ring-primary"
                    />
                    <label htmlFor="encryption" className="font-mono text-sm text-muted-foreground cursor-pointer">
                      Enable AES-256 encryption protocol
                    </label>
                  </div>

                  <TerminalButton variant="acquire" size="lg" className="w-full animate-pulse-glow">
                    [TRANSMIT SECURE MESSAGE]
                  </TerminalButton>
                </form>
              </div>

              {/* Warning */}
              <div className="mt-6 terminal-border p-4 bg-destructive/10 border-destructive/50">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-mono text-xs text-destructive/80">
                      Warning: This is a monitored communication channel. 
                      All transmissions are logged for security purposes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;