import {ComponentChildren, define, h as omiH, VNode, WeElementConstructor} from 'omi'

const COMPONENT_PREFIX = 'oc-'

interface OmiComponent {
  __omiComponentName: string
}

export function component(name: string, pure?: boolean) {
  return function (target: WeElementConstructor) {
    const t = target as any as OmiComponent & {
      pure?: boolean
    }
    t.__omiComponentName = COMPONENT_PREFIX + name
    t.pure = pure
    define(t.__omiComponentName, target)
  }
}

export function h(node: string | OmiComponent,
                  params: JSX.HTMLAttributes & JSX.SVGAttributes & Record<string, any> | null,
                  ...children: ComponentChildren[]): VNode<any> {
  const name = typeof node === 'string' ?
    node : (node as OmiComponent).__omiComponentName
  return omiH(name, params, children)
}
