import React, { Component } from "react"
import { FixedSizeList as List } from "react-window"

const height = 35;
class MenuList extends Component {
    render() {
      const { children, maxHeight, getValue, options } = this.props;
      const [value] = getValue();
      const initialOffset = (options.indexOf(value) * height) || height;
  
      return (
        <div>
            <List
                height={maxHeight}
                itemCount={children.length}
                itemSize={height}
                initialScrollOffset={initialOffset}
            >
                {({ index, style }) => <div style={style}>{children[index]}</div>}
            </List>
        </div>
      );
    }
  }

  export default MenuList
  