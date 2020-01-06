import typescript from "rollup-plugin-typescript2";
import scss from 'rollup-plugin-scss';

export default {
  input: "src/index.tsx",
  output: [
    {
      exports: 'named',
      file: "dist/react-simple-verify.js",
      format: "umd",
      name: "ReactSimpleVerify",
      library: "ReactSimpleVerify"
    }
  ],
  external: ["react-load-script", "react"],
  plugins: [
    typescript({
      typescript: require("typescript"),
      abortOnError: false
    }),
    scss({
      output: 'dist/react-simple-verify.css'
    })
  ]
};
