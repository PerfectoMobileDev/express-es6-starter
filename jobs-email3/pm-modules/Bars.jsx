import React from 'react';
import Bar from './Bar';
import { Table, TBody, TD, TR } from 'oy-vey';


const Bars = ({history}) => {

  const spaceStyle = {
    lineHeight: '1px',
    fontSize: '1px'
  };

  return (
    <Table width="100%">
      <TBody>
      <TR>

        <TD height="1" width="40" style={spaceStyle}>&nbsp;</TD>

        {history.reverse().map(item => (
          <React.Fragment>
            <TD key={item.id}>
              <Bar passed={item.statuses.PASSED} failed={item.statuses.FAILED}/>
            </TD>
          </React.Fragment>
        ))}

        <TD height="1" width="40" style={spaceStyle}>&nbsp;</TD>

      </TR>
      </TBody>
    </Table>
  );
};

export default Bars;