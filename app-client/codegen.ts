import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:9002",
  // TODO: This documents config might be causing the issue with expo router app based navigation instead of traditional src folder
  documents: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  generates: {
    "./__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
