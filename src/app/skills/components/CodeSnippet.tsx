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
    <div className={`rounded-2xl overflow-hidden border border-white/10 bg-[#111a1e] shadow-[0_0_25px_rgba(0,0,0,0.4)] ${className}`}>
      {/* Header */}
      <div className="px-6 py-4 flex items-center justify-between bg-[#182428] backdrop-blur-md border-b border-white/10">
        <div>
          <h3 className="text-lg font-bold text-[#C1FF72] mb-1">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[#C1FF72]/20 hover:text-[#C1FF72] text-white rounded-lg transition-all duration-200 border border-white/10 hover:border-[#C1FF72]/40"
        >
          <Icon name={copied ? 'CheckIcon' : 'ClipboardDocumentIcon'} size={18} className={copied ? 'text-[#C1FF72]' : 'text-white'} />
          <span className="text-sm font-semibold">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Block */}
      <div className="p-6 overflow-x-auto bg-[#090e11]">
        <pre className="text-sm font-mono text-gray-100 leading-relaxed">
          <code className={`language-${language}`}>
            {code.split('\n').map((line, idx) => (
              <div key={idx}>
                <span className="text-[#C1FF72]">{line.replace(/(const|let|var|function|return|if|else|for|while)/g, '$1')}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
