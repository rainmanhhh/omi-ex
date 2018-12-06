declare module 'omi-router' {
  interface RouteEvt {
    query: {
      [k: string]: string
    },
    params: {
      [k: string]: string
    }
  }

  const route: {
    before: (() => void) | ((evt: RouteEvt) => void)
    after: (() => void) | ((evt: RouteEvt) => void)

    (path: string, callback: ((evt: RouteEvt) => void) | (() => void)): void
  }
  export = route
}