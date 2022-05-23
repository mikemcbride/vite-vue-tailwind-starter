import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import Counter from '../Counter.vue'

describe('Counter', () => {
    // render the component once.
    const { getByRole, getByTestId, getByText } = render(Counter)

    it('increments the counter when increment button is clicked', async () => {
        const incrementButton = getByRole('button', { name: 'increment' })

        // Dispatch a native click event to our increment button element twice
        await fireEvent.click(incrementButton)
        await fireEvent.click(incrementButton)

        let expectedText = 'Count: 2'
        let element = getByTestId('count-value')

        expect(element.innerHTML).toBe(expectedText)
    })

    it('decrements the counter when decrement button is clicked', async () => {
        const decrementButton = getByRole('button', { name: 'decrement' })

        // Click decrement button twice, expect it to be 0
        await fireEvent.click(decrementButton)
        await fireEvent.click(decrementButton)

        let expectedText = 'Count: 0'
        let element = getByTestId('count-value')
        expect(element.innerHTML).toBe(expectedText)
    })
})
