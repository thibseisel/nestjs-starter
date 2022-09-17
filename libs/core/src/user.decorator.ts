import { createParamDecorator, ExecutionContext } from "@nestjs/common"

/**
 * Extracts metadata of the currently authenticated user.
 * May be `undefined` if no authentication was issued with the request.
 */
export const User: () => ParameterDecorator = createParamDecorator(
  (_data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest()
    return request.user
  },
)
