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
          {name: 'TESTS', value: 10},
          {name: 'SUCCESS', value: 10},
          {name: 'FAILED', value: 0}
        ]}/>
      </TR>
      </TBody>
    </Table>
  );
};

export default Rate;