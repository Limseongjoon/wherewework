import { atom } from 'recoil';
import { v4 } from 'uuid';

export const sampleState = atom({
  key: `sampleState/${v4()}`,
  default: [],
});

// https://recoiljs.org/ko/docs/introduction/getting-started
