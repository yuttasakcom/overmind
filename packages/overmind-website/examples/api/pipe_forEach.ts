export default (ts) =>
  ts
    ? [
        {
          code: `
import { Pipe, pipe, forEach } from 'overmind'
import { getPosts, getAuthor, setAuthor } from './operators'

export const openPosts: Pipe<string> = pipe(
  getPosts,
  forEach(pipe(
    getAuthor,
    setAuthor
  ))
)
`,
        },
      ]
    : [
        {
          code: `
import { pipe, forEach } from 'overmind'
import { getPosts, getAuthor, setAuthor } from './operators'

export const openPosts = pipe(
  getPosts,
  forEach(pipe(
    getAuthor,
    setAuthor
  ))
)
`,
        },
      ]