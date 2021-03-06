import React from 'react';
import { Table, TBody, TR, TD, A } from 'oy-vey';

import EmptySpace from '../modules/EmptySpace.jsx';


const Info = ({name}) => {
  return (
    <Table width="100%">
      <TBody>
      <TR>
        <TD
          align="left"
          style={{color: '#425563', fontSize: '26px', fontWeight: 100, fontFamily: 'Helvetica', padding: '0 30px'}}>
          Here you go, your build is ready!
        </TD>
      </TR>
      <TR>
        <TD
          align="left">
          <EmptySpace height={30}/>
          <A style={{color: '#0086BF', fontSize: '20px', padding: '0 30px'}}
             href="https://branchtest.reporting.perfectomobile.com/library">
            {name}
          </A>
        </TD>
      </TR>
      </TBody>
    </Table>
  );
};

export default Info;