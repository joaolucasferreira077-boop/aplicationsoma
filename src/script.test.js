import { describe, it, expect } from 'vitest';
import { soma } from './script.js';

describe('soma e sua respectiva respota', () => {
  it('1 + 2 = 3', () => {
    expect(soma(1, 2)).toBe(3);
  });

  it('2 + 4 = 6', () => {
    expect(soma(2, 4)).toBe(6);
  });

  it('10 + 10 = 20', () => {
    expect(soma(10, 10)).toBe(20);
  });
});
