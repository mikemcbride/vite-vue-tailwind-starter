import {render, fireEvent} from '@testing-library/vue'
import Counter from '../components/Counter.vue'

test('increments value on click', async () => {
  const {getByRole, getByText} = render(Counter)

  const button = getByRole('button', { name: 'increment' })

  // Dispatch a native click event to our button element.
  await fireEvent.click(button)
  await fireEvent.click(button)

  // getByText returns false if not found
  getByText('Count: 2')
})

test('decrements value on click', async () => {
  const {getByRole, getByText} = render(Counter)

  const button = getByRole('button', { name: 'decrement' })

  // Dispatch a native click event to our button element.
  await fireEvent.click(button)
  await fireEvent.click(button)

  // getByText returns false if not found
  getByText('Count: -2')
})
