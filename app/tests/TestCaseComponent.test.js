import { describe, expect, it } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import TestCaseComponent from '../components/TestCaseComponent'

describe('testCaseComponent', () => {
  it('renders the message correctly', async () => {
    const wrapper = await mountSuspended(TestCaseComponent)
    expect(wrapper.text()).toContain('This component is set up.')
  })
})
