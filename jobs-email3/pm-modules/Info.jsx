import React from 'react';
import {Table, TBody, TR, TD} from 'oy-vey';

import EmptySpace from '../modules/EmptySpace.jsx';


const Info = ({name}) => {
  const textStyle = {
    color: '#42444c',
    backgroundColor: '#eeeeee',
    fontFamily: 'Arial',
    fontSize: '18px'
  };

  return (
    <Table width="100%">
      <TBody>
        <TR>
          <TD
            align="center"
            style={textStyle}>
            <EmptySpace height={20} />
            Here you go, your build is ready!!{name}
            <EmptySpace height={80} />
          </TD>
        </TR>
      </TBody>
    </Table>
  );
};

export default Info;