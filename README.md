# hoc-react-img-fallback
## Install
`yarn add hoc-react-img-fallback`

or

`npm install --save hoc-react-img-fallback`

## API by an example
### The component to print
We want to draw this Component (**Component.jsx**):
```es6
import React from 'react'

export default ({ onError, src }) => {
  return (
    <div className="my-component">
      <img
        src={src}
        onError={onError}
      />
    </div>  
  )
}
```
 - `onError` is injected by `hoc-react-img-fallback`
 - `src` is injected by our parent component

### The fallback component, printed when the first component has an error
If there is an error, we draw this fallback Component (**Fallback.jsx**):
```es6
import React from 'react'

export default ({ src }) => {
  return (
    <div className="my-error">
      {'Sadly we can\'t print this image :'} {src}
    </div>  
  )
}
```
 - `src` is injected by our parent component

### The mixed component
**Image.jsx**
```es6
import fallback from 'hoc-react-img-fallback'
import Component from './Component'
import FallbackComponent from './Fallback'

export default fallback(Component, FallbackComponent)
```
 - First argument is the Component we try to print
 - Second argument is the FallbackComponent if the first one is on error

### The parent component
**Parent.jsx**
```es6
import React from 'react'
import Image from './Image.jsx'

export default () => {
  return (
    <div className="my-parent">
      {/* This image is on error and prints the Fallback Component */}
      <Image src="http://unknonwn.link/oups" />

      {/* This image is printed because there is no error */}
      <Image src="https://www.google.fr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
    </div>
  )
}
```

# About uni rakun ![unirakun](https://avatars3.githubusercontent.com/u/26111459?s=50&v=4)
**uni rakun** is created by two passionate french developers.

Do you want to contact them ? Go to their [website](https://unirakun.fr)

<table border="0">
 <tr>
  <td align="center"><img src="https://avatars1.githubusercontent.com/u/26094222?s=460&v=4" width="100" /></td>
  <td align="center"><img src="https://avatars1.githubusercontent.com/u/17828231?s=460&v=4" width="100" /></td>
 </tr>
 <tr>
  <td align="center"><a href="https://github.com/guillaumecrespel">Guillaume CRESPEL</a></td>
  <td align="center"><a href="https://github.com/fabienjuif">Fabien JUIF</a></td>
</table>
