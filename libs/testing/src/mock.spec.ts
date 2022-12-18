import { mock } from "./mock"

describe("mock", () => {
  it("defines a mock function for the given property name", () => {
    const mockService = mock<TestService>(["clear"])

    const mockMethod = mockService.clear
    expect(jest.isMockFunction(mockMethod)).toBe(true)
    expect(() => mockMethod()).not.toThrow()
  })

  it("sets mock function name based on the method name", () => {
    const mockService = mock<TestService>(["authenticate", "clear"])

    expect(mockService.authenticate.getMockName()).toBe("authenticate")
    expect(mockService.clear.getMockName()).toBe("clear")
  })

  it("defines mock functions with same parameters", () => {
    const mockService = mock<TestService>(["authenticate"])

    expect(() => mockService.authenticate("john-doe", "P@ssw0rd")).not.toThrow()
  })

  it("don't create mock functions for unspecified method names", () => {
    const mockService = mock<TestService>(["clear"])

    expect(mockService).not.toHaveProperty("authenticate")
  })

  it("defines a mock with no properties", () => {
    const mockService = mock<TestService>([])
    expect(mockService).toEqual({})
  })
})

class TestService {
  constructor(private readonly username: string) {}

  get name(): string {
    return this.username
  }

  authenticate(username: string, password: string): void {
    throw Error(
      `Should not have been called with "${username}" and "${password}"`,
    )
  }

  clear(): void {
    throw Error("Should not be called!")
  }
}
