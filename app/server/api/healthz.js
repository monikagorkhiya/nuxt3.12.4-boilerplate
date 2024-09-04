import packageJson from '../../package.json'
/* http://localhost:3000/api/healthz */
export default defineEventHandler(() => {
  return {
    version: packageJson.version,
  }
})
