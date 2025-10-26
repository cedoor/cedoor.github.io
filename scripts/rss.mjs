import { createRequire } from 'module'
import { generateRSS } from 'pliny/utils/generate-rss.js'
import siteMetadata from '../data/siteMetadata.js'

const require = createRequire(import.meta.url)

const rss = () => {
  const allBlogs = require('../.contentlayer/generated/Blog/_index.json')
  generateRSS(siteMetadata, allBlogs)
  console.log('RSS feed generated...')
}
export default rss
