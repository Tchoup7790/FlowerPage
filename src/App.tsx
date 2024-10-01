import { flex } from "../styled-system/patterns"
import { css } from "../styled-system/css"
import ThreeBackground from "./components/three-background"

function App() {
  return (
    <main
      className={flex({
        height: "screen",
        width: "screen",
        flexDir: "column",
        justifyContent: "center",
        alignItems: "center",
        md: { padding: "10rem 5rem" },
        lg: { padding: "20rem 10rem" }
      })}
    >
      <div
        className={css({
          borderRadius: "16px",
          boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          backgroundColor: "rgba(255,255,255,0.4)",
          backdropFilter: "blur(5px)",
          height: "fit-content",
          width: "fit-content",
          padding: 5,
        })}
      >
        <h1 className={css({ fontWeight: "bold", fontSize: "4xl" })}>
          {"Hi, this is a 3D flower page."}
        </h1>
        <br />
        <h1>{"Here is an exemple of 3D flower"}</h1>
        <br />
        <h1>{"Make with Blender, React, Pandacss and Framer Motion"}</h1>
      </div>
      <ThreeBackground front={true} />
      <ThreeBackground front={false} />
    </main>
  )
}

export default App
