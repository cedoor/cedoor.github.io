import { createRequire } from 'module'
import { writeFileSync } from 'fs'
import { allCoreContent } from 'pliny/utils/contentlayer.js'
import siteMetadata from '../data/siteMetadata.js'

const require = createRequire(import.meta.url)

const search = () => {
  if (siteMetadata?.search?.kbarConfig?.searchDocumentsPath) {
    const allBlogs = require('../.contentlayer/generated/Blog/_index.json')
    writeFileSync(
      `public/${siteMetadata.search.kbarConfig.searchDocumentsPath}`,
      JSON.stringify(allCoreContent(allBlogs))
    )
    console.log('Local search index generated...')
  }
}
export default search
