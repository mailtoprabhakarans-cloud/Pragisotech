export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This Page Didn't Load | Pragiso Soft Technologies</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Manrope:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
      :root {
        --background: #0d111a;
        --card: #141b2b;
        --foreground: #f4f6fa;
        --muted: #94a3b8;
        --accent: #38bdf8;
        --electric: #3b82f6;
        --border: rgba(255, 255, 255, 0.1);
      }
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: 'Manrope', -apple-system, sans-serif;
        background-color: var(--background);
        background-image: 
          radial-gradient(120% 90% at 15% 0%, rgba(59, 130, 246, 0.22) 0%, transparent 60%),
          radial-gradient(90% 80% at 90% 20%, rgba(56, 189, 248, 0.15) 0%, transparent 65%);
        color: var(--foreground);
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        padding: 1.5rem;
        overflow: hidden;
        position: relative;
      }
      .grid-backdrop {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(to right, rgba(56, 189, 248, 0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(56, 189, 248, 0.06) 1px, transparent 1px);
        background-size: 64px 64px;
        pointer-events: none;
      }
      .glow-orb {
        position: absolute;
        width: 25rem;
        height: 25rem;
        border-radius: 50%;
        background: rgba(59, 130, 246, 0.15);
        filter: blur(100px);
        animation: float 8s ease-in-out infinite;
        pointer-events: none;
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 0.9; }
      }
      .card {
        position: relative;
        max-width: 30rem;
        width: 100%;
        text-align: center;
        padding: 3rem 2rem;
        background: rgba(20, 27, 43, 0.75);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid var(--border);
        border-radius: 1.75rem;
        box-shadow: 0 20px 50px -15px rgba(0, 0, 0, 0.5), 0 0 30px -5px rgba(56, 189, 248, 0.2);
        z-index: 10;
      }
      .icon-box {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 1.25rem;
        background: rgba(245, 158, 11, 0.1);
        border: 1px solid rgba(245, 158, 11, 0.3);
        color: #fbbf24;
        margin-bottom: 1.5rem;
        animation: bounce 3s ease-in-out infinite;
      }
      .icon-box svg { width: 2.25rem; height: 2.25rem; }
      .eyebrow {
        display: inline-block;
        padding: 0.35rem 0.85rem;
        border-radius: 9999px;
        background: rgba(245, 158, 11, 0.1);
        border: 1px solid rgba(245, 158, 11, 0.25);
        color: #fbbf24;
        font-size: 0.75rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 1rem;
      }
      h1 {
        font-family: 'Sora', sans-serif;
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        letter-spacing: -0.02em;
      }
      p {
        color: var(--muted);
        font-size: 0.95rem;
        line-height: 1.6;
        margin-bottom: 2rem;
      }
      .actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      a, button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        border-radius: 0.85rem;
        font-family: 'Manrope', sans-serif;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .primary {
        background: linear-gradient(135deg, #2563eb, #3b82f6, #06b6d4);
        color: #ffffff;
        border: none;
        box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
      }
      .primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 30px -5px rgba(59, 130, 246, 0.6);
      }
      .secondary {
        background: rgba(255, 255, 255, 0.05);
        color: var(--foreground);
        border: 1px solid var(--border);
      }
      .secondary:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
      }
    </style>
  </head>
  <body>
    <div class="grid-backdrop"></div>
    <div class="glow-orb" style="top: 10%; left: 20%;"></div>
    <div class="glow-orb" style="bottom: 10%; right: 20%; animation-delay: -4s;"></div>

    <div class="card">
      <div class="icon-box">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      </div>

      <div class="eyebrow">System Alert</div>
      <h1>This Page Didn't Load</h1>
      <p>Something went wrong on our end. You can try refreshing the browser or head back home.</p>

      <div class="actions">
        <button class="primary" onclick="location.reload()">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M160 80v48m0 0l-32-32m32 32l32-32" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 12a8 8 0 0113.803-5.592l-2.023 2.023M20 12a8 8 0 01-13.803 5.592l2.023-2.023" />
          </svg>
          Try Again
        </button>
        <a class="secondary" href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Go Home
        </a>
      </div>
    </div>
  </body>
</html>`;
}
