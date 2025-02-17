import { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from '@next/env'
const projectDir = process.cwd()
loadEnvConfig(projectDir)

const { ENDPOINT, HASURA_ADMIN_SECRET } = process.env;

const URL = `${ENDPOINT}`

const config: CodegenConfig = {
  schema: [
    {
      [URL]: {
        headers: {
          "x-hasura-admin-secret": `${HASURA_ADMIN_SECRET}`,
        },
      },  
    }
  ],
  documents: ["lib/**/*.{ts,tsx}", "!lib/**/__generated__/**"],
  ignoreNoDocuments: true,
  generates: {
    "./lib/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  hooks: { afterAllFileWrite: ["npx prettier --write"] },
};

export default config;