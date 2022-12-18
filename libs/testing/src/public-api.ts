import { Type } from "@nestjs/common"

/**
 * Narrow a class type to only expose its public members.
 */
export type PublicApi<T = Type<unknown>> = Pick<T, keyof T>
