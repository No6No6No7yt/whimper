import * as React from 'react';
import { useEffect, useState } from 'react';

export default function BloxFruitsLua() {
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/No6No6No7yt/Lumin-Revamped/refs/heads/main/BloxFruits.lua')
      .then(response => response.text())
      .then(data => setCode(data))
      .catch(error => console.error('Error fetching code:', error));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'monospace', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}