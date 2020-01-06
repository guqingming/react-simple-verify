declare module '*.vue' {
  import Vue, { VueConstructor } from 'vue'
  export default Vue
}

declare module 'element-ui/lib/locale/lang/*' {
  export const elementLocale: any
}

declare module '*.gif' {
  export const gif: any
}

declare module '*.png' {
  export const png: any
}

declare module '*.jpg' {
  export const jpg: any
}

declare module '*.js' {
  export const js: any
}

declare module '*.tsx' {
  export const tsx: any
}
