import { expect, test } from 'vitest'

test('adds 1 + 2 to equal 3', () => {
	const sum = (first: number, second: number): number => {
		return first + second
	}

	expect(sum(1, 2)).toBe(3)
})
