### install
#### npm i hoverbox -S

### usage
u can pass every prop as a value or function.When porp is function, this prop is calculate with this function.
```
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