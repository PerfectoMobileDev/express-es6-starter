import React from 'react';
import { Table, TBody, TD, TR } from 'oy-vey';

import EmptySpace from '../modules/EmptySpace.jsx';

export const spaceStyle = {
  lineHeight: '10px',
  fontSize: '1px'
};

const SmallTitle = ({title}) => {
  return (
    <Table width="100%">
      <TBody>
      <TR style={{padding: '0, 10px'}}>
        <TD height="1" width="30" style={spaceStyle}/>

        <TD
          align="center"
          style={{marginBottom: '10px', borderBottom: '1px solid #AAA', color: '#aaaaaa', fontSize: '12px', fontWeight: 100, fontFamily: 'Helvetica'}}>
          <EmptySpace height={'40px'}/>
          {title}
          <EmptySpace height={'10px'}/>
        </TD>

        <TD height="1" width="30" style={spaceStyle}/>
      </TR>
      </TBody>
    </Table>
  );
};

export default SmallTitle;