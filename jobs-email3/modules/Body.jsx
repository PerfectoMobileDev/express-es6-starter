import React from 'react';
import {Table, TBody, TR, TD} from 'oy-vey';

import EmptySpace from './EmptySpace.jsx';


const Body = (props) => {
  const spaceStyle = {
    lineHeight: '1px',
    fontSize: '1px'
  };

  const textStyle = {
    color: '#42444c',
    fontFamily: 'Helvetica',
    fontSize: '18px'
  };

  return (
    <Table width="100%"
           style={{backgroundColor: '#ffffff'}}>
      <TBody>
        <TR>
          <TD
            align="center"
            style={textStyle}>
            <EmptySpace height={20} />
            {props.children}
            <EmptySpace height={40} />
          </TD>

        </TR>
      </TBody>
    </Table>
  );
};

export default Body;