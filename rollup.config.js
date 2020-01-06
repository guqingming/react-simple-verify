import typescript from "rollup-plugin-typescript2";
import scss from 'rollup-plugin-scss';

export default {
  input: "src/index.tsx",
  output: [
    {
      exports: 'named',
      file: "dist/react-simple-verify.umd.js",
      format: "umd",
      name: "ReactMati"
    },
    {
      exports: 'named',
      file: "dist/react-simple-verify.esm.js",
      format: "esm"
    },
    {
      exports: 'named',
      file: "dist/react-simple-verify.cjs.js",
      format: "cjs"
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
