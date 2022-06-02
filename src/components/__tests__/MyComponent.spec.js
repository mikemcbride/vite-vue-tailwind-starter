// these are the imports we most commonly need for tests
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import MyComponent from '../MyComponent.vue'

// set up our test suite for this component
describe('MyComponent', () => {
    // render the component - we'll share the rendered instance across our tests
    // rather than re-rendering each time.
    render(MyComponent)

    // also declare and variables or utility functions we use in our tests here.
    const defaultText = "Let's get started."

    // start our tests
    it('renders the default message', async () => {
        const element = screen.getByText(defaultText)
        await userEvent.click(document.body) // simulate a click on the body
        expect(element.innerHTML.trim()).toBe(defaultText)
    })
})
