import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import CounterButtons from '../CounterButtons.vue'

describe('CounterButtons', () => {
    // render the component once.
    const { getByRole, getByTestId } = render(CounterButtons)

    it('increments the counter when increment button is clicked', async () => {
        const incrementButton = getByRole('button', { name: 'increment' })

        // Dispatch a native click event to our increment button element twice
        await userEvent.click(incrementButton)
        await userEvent.click(incrementButton)

        const expectedText = 'Count: 2'
        const element = getByTestId('count-value')

        expect(element.innerHTML).toBe(expectedText)
    })

    it('decrements the counter when decrement button is clicked', async () => {
        const decrementButton = getByRole('button', { name: 'decrement' })

        // Click decrement button twice, expect it to be 0
        await userEvent.click(decrementButton)
        await userEvent.click(decrementButton)

        const expectedText = 'Count: 0'
        const element = getByTestId('count-value')
        expect(element.innerHTML).toBe(expectedText)
    })
})
