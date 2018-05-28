import React from 'react';
import {Table, TBody, TR, TD} from 'oy-vey';

import EmptySpace from '../modules/EmptySpace.jsx';


const SmallTitle = ({title, margin = 40}) => {

  return (
    <Table width="100%">
      <TBody>
        <TR>
          <TD
            align="center"
            style={{color: '#aaaaaa', fontSize: '12px', fontWeight: 100, fontFamily: 'Helvetica'}}>
            <EmptySpace height={margin} />
            {title}
            <EmptySpace height={margin} />
          </TD>
        </TR>
      </TBody>
    </Table>
  );
};

export default SmallTitle;