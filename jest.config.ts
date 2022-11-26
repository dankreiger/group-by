import type { JestConfigWithTsJest } from 'ts-jest/dist/types';
import { defaults as tsjPreset } from 'ts-jest/presets';
const config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  transform: {
    ...tsjPreset.transform,
  },
};
export default config;
