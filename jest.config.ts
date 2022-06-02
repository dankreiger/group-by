import type { InitialOptionsTsJest } from 'ts-jest/dist/types';
import { defaults as tsjPreset } from 'ts-jest/presets';
const config: InitialOptionsTsJest = {
  globals: {
    'ts-jest': {},
  },
  transform: {
    ...tsjPreset.transform,
  },
};
export default config;
