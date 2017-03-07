# react component manage the hover state with simple api

## install
```
npm i hoverbox -S
```


## usage
HoverBox is a div box that manage hover state,
u can pass every prop as a value or function.When porp is function, final prop is calculate with this function.
```
import React from 'react';
import HoverBox from 'hoverbox';

// dynamic children and fixed style
<HoverBox
  style={{color: 'red'}}>
  {isHover => {
    if (isHover){
      return <p>is hover</p>
    }else{
      return <p>not hover</p>
    }
  }}
</HoverBox>

// dynamic style and fixed children
<HoverBox
  style={isHover => ({color: isHover ? 'red' : 'blue'})}>
    Hello HoverBox
</HoverBox>
```
### See the Pen <a href='https://codepen.io/dreday/pen/JWKmdM/'>HoverBox Demo</a>

## ps
there is also a FocusBox
```
import {FocusBox} from 'hoverbox';
```

