# omi-ex
omi.js extension

## React-style jsx component
use @component decorator instead of @tag, omi-ex/h instead of omi/h:

```
import { render, WeElement } from 'omi'
import { h, component } from 'omi-ex'

@component('comp')
class MyComponent extends WeElement {
    render() {
        return <div>this is MyComponent</div>
    }
}

render(<MyComponent/>, 'body')
```
dom would be rendered as `<oc-comp><div>this is MyComponent</div></oc-comp>`


## React-style jsx routing(support keepAlive)
```
import { render, WeElement } from 'omi'
import { Router, Route, h, component } from 'omi-ex'

@component('page-a')
class PageA extends WeElement {
    render() {
        return <div>page A</div>
    }
}

@component('page-b')
class PageB extends WeElement {
    render() {
        return <div>page B</div>
    }
}

@component('routes')
class Index extends WeElement {
    render() {
        return <Router>
            <Route path={'/pageA'}><PageA/></Route>
            <Route path={'/pageB'} keepAlive={true}><PageB/></Route>
        </Router>
    }
}

render(<Index/>, 'body')
```

