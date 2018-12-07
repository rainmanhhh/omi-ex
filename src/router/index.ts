import oRoute from 'omi-router'

export interface RouteEvt {
  query?: {
    [k: string]: string
  },
  params?: {
    [k: string]: string
  },
  data?: any
}

export interface IRoute {
  before: ((evt: RouteEvt) => void) | (() => void)
  after: ((evt: RouteEvt) => void) | (() => void)

  /**
   *
   * @param path
   * @param data
   */
  to(path: string, data?: any): void

  /**
   *
   * @param path
   * @param callback
   */
  (path: string, callback: ((evt: RouteEvt) => void) | (() => void)): void
}

export const route: IRoute = oRoute