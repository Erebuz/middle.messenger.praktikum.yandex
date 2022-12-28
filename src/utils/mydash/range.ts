export function range(end: number): number[]
export function range(start: number, end: number): number[]
export function range(start: number, end: number, step: number): number[]
export function range(start: number, end?: number, step?: number): number[] {
  if (end === undefined) {
    end = start
    start = 0
  }

  if (step === 0) {
    return Array(Math.abs(end - start)).fill(start)
  }

  if (step === undefined) {
    step = start < end ? 1 : -1
  }

  const arr = []

  for (let i = start; start < end ? i < end : i > end; i += step) {
    arr.push(i)
  }

  return arr
}
