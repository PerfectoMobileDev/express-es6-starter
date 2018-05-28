import React from 'react';
import {Table, TBody, TR, TD} from 'oy-vey';

import EmptySpace from '../modules/EmptySpace.jsx';


const SmallTitle = ({title}) => {

  return (
    <Table width="100%">
      <TBody>
        <TR>
          <TD
            align="center"
            style={{color: '#aaaaaa', fontSize: '12px', fontWeight: 100, fontFamily: 'Helvetica'}}>
            <EmptySpace height={40} />
            {title}
            <EmptySpace height={40} />
          </TD>
        </TR>
      </TBody>
    </Table>
  );
};

export default SmallTitle;