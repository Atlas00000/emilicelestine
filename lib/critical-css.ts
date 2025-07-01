// Critical CSS extraction utility
// This helps inline critical styles for faster initial render

export const criticalCSS = `
/* Critical styles for above-the-fold content */
.min-h-screen { min-height: 100vh; }
.bg-black { background-color: rgb(0 0 0); }
.text-white { color: rgb(255 255 255); }
.relative { position: relative; }
.overflow-x-hidden { overflow-x: hidden; }

/* Critical layout styles */
.pt-24 { padding-top: 6rem; }
.pb-12 { padding-bottom: 3rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.max-w-7xl { max-width: 80rem; }
.mx-auto { margin-left: auto; margin-right: auto; }

/* Critical text styles */
.text-5xl { font-size: 3rem; line-height: 1; }
.md\\:text-6xl { font-size: 3.75rem; line-height: 1; }
.font-bold { font-weight: 700; }
.mb-6 { margin-bottom: 1.5rem; }
.bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
.from-blue-400 { --tw-gradient-from: #60a5fa; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(96, 165, 250, 0)); }
.via-purple-400 { --tw-gradient-stops: var(--tw-gradient-from), #c084fc, var(--tw-gradient-to, rgba(192, 132, 252, 0)); }
.to-pink-400 { --tw-gradient-to: #f472b6; }
.bg-clip-text { background-clip: text; }
.text-transparent { color: transparent; }

/* Critical button styles */
.flex { display: flex; }
.items-center { align-items: center; }
.gap-4 { gap: 1rem; }
.mb-8 { margin-bottom: 2rem; }
.border-gray-700 { border-color: rgb(55 65 81); }
.text-gray-300 { color: rgb(209 213 219); }
.hover\\:bg-gray-800:hover { background-color: rgb(31 41 55); }

/* Critical card styles */
.bg-gray-900\\/50 { background-color: rgb(17 24 39 / 0.5); }
.border-gray-800 { border-color: rgb(31 41 55); }
.backdrop-blur-sm { backdrop-filter: blur(4px); }
.h-full { height: 100%; }
.transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }
.duration-300 { transition-duration: 300ms; }

/* Critical responsive styles */
@media (min-width: 768px) {
  .md\\:text-6xl { font-size: 3.75rem; line-height: 1; }
}

@media (min-width: 1024px) {
  .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
`;

export const injectCriticalCSS = () => {
  if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);
  }
}; 