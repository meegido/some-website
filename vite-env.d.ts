/// <reference types="vite/client" />;
interface ImportMetaEnv {
  readonly VITE_USE_MOCK_API: string;
  // Add other environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
