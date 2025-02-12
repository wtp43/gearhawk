import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    workspace: [
      {
        extends: true,
        test: {
          include: ['src/services/xml_parser/*.test.{ts,js}'],
          name: 'xml_parser',
          environment: 'node',
        },
      },
    ],
  },
})
