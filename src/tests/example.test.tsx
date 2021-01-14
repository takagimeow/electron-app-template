/* eslint-disable no-unused-vars */
import { cleanup } from '@testing-library/react';
// import * as faker from 'faker';
// import React from 'react';
import '@testing-library/jest-dom/extend-expect';

// テスト実行後にDOMをunmount,cleanupします。
afterEach(cleanup);

jest.setTimeout(10000);

describe('Example', () => {
  afterEach(() => {
    cleanup();
  });
  it.todo('~をクリックすると~が表示される');
});
