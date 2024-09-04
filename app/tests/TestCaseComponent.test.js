import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import TestCaseComponent from '../components/TestCaseComponent';

describe('TestCaseComponent', () => {
  it('renders the message correctly', async () => {
    const wrapper = await mountSuspended(TestCaseComponent);
    expect(wrapper.text()).toContain('This component is set up.');
  });
});
