/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HA_URL: string;
  readonly VITE_HA_TOKEN: string;
  readonly VITE_FOLDER_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
