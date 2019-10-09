// @flow

import type { Link } from './index';

export type Profile = {
  avatar?: string,
  name: string,
  profile: Link,
  account: Link,
  notifications: {
    plural: string,
    none: string,
    clear: string,
  },
};
