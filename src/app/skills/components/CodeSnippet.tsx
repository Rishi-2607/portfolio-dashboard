'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CodeSnippetProps {
  title: string;
  description: string;
  code: string;
  language: string;
  className?: string;
}

export default function CodeSnippet({ title, description, code, language, className = '' }: CodeSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-gray-900 via-gray-950 to-black shadow-[0_0_25px_rgba(0,0,0,0.4)] ${className}`}>
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between bg-gray-800/20 backdrop-blur-md">
        <div>
          <h3 className="text-lg font-bold text-purple-400 mb-1">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-purple-600/20 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
        >
          <Icon name={copied ? 'CheckIcon' : 'ClipboardDocumentIcon'} size={18} className="text-white" />
          <span className="text-sm font-medium">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Block */}
      <div className="p-6 overflow-x-auto bg-gray-900/80">
        <pre className="text-sm font-mono text-gray-100 leading-relaxed">
          <code className={`language-${language}`}>
            {code.split('\n').map((line, idx) => (
              <div key={idx}>
                <span className="text-purple-400">{line.replace(/(const|let|var|function|return|if|else|for|while)/g, '$1')}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
