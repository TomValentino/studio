'use client';

import { useState, useEffect } from 'react';
import TopBar from "@/global/components/TopBar";
import NavBar from "@/global/components/NavBar";
import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";

export default function Home() {
  const [jsxCode, setJsxCode] = useState(
    `import styles from './LiveComponent.module.css';\n\n` +
    `export default function LiveComponent() {\n` +
    `  return <div className={styles.box}>Live edit working!</div>;\n}`
  );
  const componentName = 'LiveComponent';
  const cssCode = `.box {\n  background: lightblue;\n  padding: 20px;\n  border-radius: 8px;\n}`;

  const cssItem = `.cum {color: white}`;
  // Send JSX+CSS to API on change (debounced)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (jsxCode.trim()) {
        fetch('/api/create-component', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ componentName, jsxCode, cssCode, cssItem })
        })
        .then(res => res.text())
        .then(msg => console.log('Live update:', msg))
        .catch(err => console.error('Live update error:', err));
      }
    }, 500); // debounce time

    return () => clearTimeout(timeout);
  }, [jsxCode]);

  const test = async () => {
    const res = await fetch('/api/create-component', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        componentName: 'poop',
        jsxCode: `import styles from './poop.module.css';\n\nexport default function Poop() {\n  return <button className={styles.btn}>Click me</button>;\n}`,
        cssItem: `dffdfdfdfdfdfd`,
        cssCode: `.btn {\n  background: red;\n  color: white;\n  padding: 10px;\n}`,
      })
    });

    const text = await res.text();
    console.log('API response:', res.status, text);
  }

  return (
    <>
      <TopBar />
      <NavBar />
      <Hero />
      <HowItWorks />

      <div style={{ padding: 20, marginTop: 40 }}>
        <h2>Live JSX Component Editor</h2>
        <p>Component name: <strong>{componentName}</strong></p>
        <textarea
          value={jsxCode}
          onChange={(e) => setJsxCode(e.target.value)}
          rows={12}
          style={{ width: '100%', fontFamily: 'monospace', fontSize: 14 }}
        />
      </div>

      <button onClick={test} style={{ marginTop: 20 }}>Test Static Component</button>
      <p style={{ marginBottom: "100em" }}></p>
    </>
  );
}
