import React from 'react';

export enum Status {
  LOADING = 'loading',
  FIRST_OPEN = 'firstOpen',
  UN_AUTHORIZED = 'unauthorized',
  AUTHORIZED = 'authorized',
}
export function createApplicationInitialState(): Status {
  return Status.LOADING;
}
export const Context = React.createContext({
  applicationState: createApplicationInitialState(),
  setApplicationState: (_: Status) => {},
});
