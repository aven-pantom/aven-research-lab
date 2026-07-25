/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './portal/index.html',
    './portal/app.js',
    './portal/tailwind.css'
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
        serif: ['ResearchSerif', 'Georgia', 'serif']
      },
      colors: {
        field: 'var(--field)',
        surface: 'var(--surface)',
        surface2: 'var(--surface-2)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        faint: 'var(--faint)',
        line: 'var(--line)',
        lineSoft: 'var(--line-soft)',
        accent: 'var(--accent)',
        blueprint: 'var(--blueprint)'
      },
      borderRadius: {
        shell: '24px',
        panel: '16px',
        touch: '7px'
      },
      boxShadow: {
        portal: 'var(--shadow)'
      }
    }
  }
};
