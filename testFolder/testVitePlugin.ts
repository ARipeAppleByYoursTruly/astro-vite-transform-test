import type {Plugin} from "vite"



export default function testVitePlugin(): Plugin {
  return {
    name: "testVitePlugin",
    transform(this, code: string, id: string) {
      console.log("ok?")
      // console.log(this)
      // console.log("\n\n")
      // console.log(code)
      // console.log("\n\n")
      // console.log(id)

      console.log(id)

      if (
        id.endsWith(".astro") ||
        id.endsWith(".css")
      ) {
        console.log("OK????")
        console.log(code)

        code = code.replaceAll("testClassName", "asd")

        console.log(code)
      }

      return {
        code: code,
        map: null
      }
    }
  }
}
