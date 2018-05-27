import React from 'react';

import SmallTitle from './SmallTitle';
import {Table, TBody, TR, TD} from 'oy-vey';

import EmptySpace from '../modules/EmptySpace.jsx';


const Bars = ({history}) => {

  return (
    <Table width="100%">
      <TBody>
        <TR>
          <TD>
            <SmallTitle title={'HISTORY'}/>
          </TD>
        </TR>

        <TR>
          <TD>
          </TD>
        </TR>

      </TBody>
    </Table>
  );
};

export default Bars;