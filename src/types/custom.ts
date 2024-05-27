import { FastifyRequest } from 'fastify'
import { Request } from 'graphql-http'
import { Knex } from 'knex'

/**
 * @todo - should this be split into .ts and .d.ts?
 */

// this user is internal so must be DB type
/**
 * @todo - is "unknown" acceptable?
 */
export type GraphqlContextType = {
  confirmCurrentUser: () => void
  db: Knex
  // ip?: string | undefined
  ip: () => string | undefined
  logoutUser: () => void
  // https://github.com/jkettmann/graphql-passport/issues/34#issuecomment-907506650
  user?: FastifyRequest['user'] // Express.User // must be optional to be true to type
  req: Request<unknown, unknown>
  // res: FastifyReply
}

export type DatabaseUserType = {
  id: string
  email: string
  password_hash: string
}
