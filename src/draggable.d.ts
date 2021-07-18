declare namespace svelte.JSX {
  interface HTMLAttributes {
    'onsvelte-drag:start'?: (e: CustomEvent<null>) => void;
    'onsvelte-drag:end'?: (e: CustomEvent<null>) => void;
    'ondrag-drag'?: (e: CustomEvent<{ x: number; y: number }>) => void;
  }
}