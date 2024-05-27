// import { Express } from 'express'
import Fastify, { FastifyRequest, FastifyReply } from 'fastify'
import { DatabaseType as UserDatabaseType } from '@repo/models/src/User'

/**
 * @todo - eslint not working on this
 */

// this user is internal so must be DB type
/**
 * @todo - document this
 */
// declare global {
//   namespace Express {
//     interface User extends UserDatabaseType {}
//   }
// }

declare module 'fastify' {
  interface FastifyRequest {
    user: UserDatabaseType
  }
}
