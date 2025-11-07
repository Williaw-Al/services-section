/// <reference types="vite/client" />

// Opcional, caso o reference types não cubra tudo:
declare module '*.webp' {
  const value: string;
  export default value;
}
