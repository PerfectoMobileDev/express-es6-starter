import React from 'react';
import {Table, TBody, TR, TD} from 'oy-vey';

//import EmptySpace from '../modules/EmptySpace.jsx';
import ColoredSpace from '../modules/ColoredSpace';


const factor = 10;

const Bar = ({passed, failed}) => {

  return (
    <Table width="40">
      <TBody>
      <TR>
        <TD><ColoredSpace height={passed * factor} color={"#82BC41"} /></TD>
      </TR>

      <TR>
        <TD><ColoredSpace height={1} color={"#ffffff"} /></TD>
      </TR>

      <TR>
        <TD><ColoredSpace height={failed * factor} color={"#C8102E"} /></TD>
      </TR>

      </TBody>
    </Table>
  );
};

export default Bar;