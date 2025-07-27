declare global {
  interface Window {
    THREE: any;
  }
}

export interface AudioData {
  bassLevel: number;
  midLevel: number;
  highLevel: number;
}

export interface VisualElement {
  rotation: { x: number; y: number; z: number };
  position: { x: number; y: number; z: number };
  scale: { setScalar: (value: number) => void };
  material: any;
}

export {};