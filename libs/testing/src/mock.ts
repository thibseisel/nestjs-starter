export type MockObject<T extends object> = {
  [K in keyof T]: T[K] extends (...params: infer P) => infer R
    ? jest.Mock<R, P>
    : never
}

/**
 * Creates an object whose methods are Jest mock functions.
 */
export function mock<T extends object>(
  methodNames: ReadonlyArray<keyof T>,
): MockObject<T> {
  return Object.fromEntries(
    methodNames.map((name) => [name, createMockFunction(name)]),
  ) as MockObject<T>
}

function createMockFunction(name: PropertyKey): jest.Mock<any, any> {
  return jest.fn().mockName(name.toString())
}
