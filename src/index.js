import React, { Component } from 'react';

/*
  模板
  <HoverBox propsFn={isHover => {}} {...props}>
    {children}
  </HoverBox>
*/
export class HoverBox extends Component {
  
  state = { isHover: false }

  render() {

    const { isHover } = this.state;
    
    var props = {};
    
    Object.keys(this.props)
    .forEach(key => {
      const value = this.props[key];
      
      const prop = typeof value === "function" ?
        value(isHover) : value;

      prop && (props[key] = prop);

    });

    return (
      <div
        onMouseEnter={() => this.setState({ isHover: true })}
        onMouseLeave={() => this.setState({ isHover: false })}
        {...props}
      />
    )
  }
};

export class FocusBox extends Component {
  
  state = { isFocus: false }

  render() {

    const { isFocus } = this.state;
    
    var props = {};
    
    Object.keys(this.props)
    .forEach(key => {
      const value = this.props[key];
      
      const prop = typeof value === "function" ?
        value(isFocus) : value;

      prop && (props[key] = prop);

    });

    return (
      <div
        onFocus={() => this.setState({ isFocus: true })}
        onBlur={() => this.setState({ isFocus: false })}
        {...props}
      />
    )
  }
};

export default HoverBox;