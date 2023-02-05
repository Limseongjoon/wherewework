import { atom } from 'recoil';
import { v4 } from 'uuid';

export const emailState = atom({
  key: `emailState/${v4()}`,
  default: '',
});

export const applicationState = atom({
  key: `applicationState/${v4()}`,
  default: {
    name: '',
    email: '',
    message: '',
  },
});

// https://recoiljs.org/ko/docs/introduction/getting-started
