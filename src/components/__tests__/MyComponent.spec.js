import { render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import MyComponent from '../MyComponent.vue'

describe('MyComponent', () => {
    // render the component
    const { getByText } = render(MyComponent)
    const defaultText = "Let's get started."

    it('renders the default message', async () => {
        // find the element by the message text.
        // getByText returns false if it doesn't find anything.
        // so if we find the element and the innerHTML matches our message,
        // then we know the component was properly rendered.
        const element = getByText(defaultText)
        expect(element.innerHTML.trim()).toBe(defaultText)
    })
})
