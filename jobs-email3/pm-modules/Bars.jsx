import React from 'react';

import SmallTitle from './SmallTitle';
import Bar from './Bar';
import {Table, TBody, TR, TD} from 'oy-vey';

import EmptySpace from '../modules/EmptySpace.jsx';


const Bars = ({history}) => {

  const spaceStyle = {
    lineHeight: '1px',
    fontSize: '1px'
  };

  return (
    <Table width="100%">
      <TBody>
        <TR>
          <TD>
            <SmallTitle title={'HISTORY'}/>
          </TD>
        </TR>

        <TR>
          <TD height="1" width="40" style={spaceStyle}>&nbsp;</TD>

          <TD>
            <Bar passed={history[2].statuses.PASSED} failed={history[2].statuses.FAILED}/>
          </TD>

          <TD height="1" width="40" style={spaceStyle}>&nbsp;</TD>

        </TR>

      </TBody>
    </Table>
  );
};

export default Bars;