import React from 'react';
import { Table, TBody, TR } from 'oy-vey';

import EmptySpace from '../modules/EmptySpace.jsx';
import Statuses from './Statuses';


const Rate = (props) => {
  const textStyle = {
    color: '#42444c',
    fontFamily: 'Arial'
  };

  return (
    <Table width="100%">
      <TBody>
      <TR
        align="center"
        style={textStyle}>
        <EmptySpace height={30}/>
        <Statuses statuses={[
          {name: 'total', value: 95},
          {name: 'success', value: 90},
          {name: 'failed', value: 5}
        ]}/>
      </TR>
      </TBody>
    </Table>
  );
};

export default Rate;