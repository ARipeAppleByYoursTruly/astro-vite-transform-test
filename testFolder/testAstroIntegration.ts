import type {AstroIntegration} from "astro"
import testVitePlugin from "./testVitePlugin"



export default function testAstroIntegration(): AstroIntegration {
  return {
    name: "testPlugin",
    hooks: {
      "astro:build:setup": ({vite}) => {
        console.log("what")
        vite.plugins!.push(testVitePlugin())
      }
    }
  }
}
