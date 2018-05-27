import React from 'react';

import EmptySpace from '../modules/EmptySpace';
import {Table, TBody, TR, TD} from 'oy-vey';


export default (props) => {
  return (
    <Table
      width="100%"
      align="center"
      style={{WebkitTextSizeAdjust: '100%',
        msTextSizeAdjust: '100%',
        msoTableLspace: '0pt',
        msoTableRspace: '0pt',
        borderCollapse: 'collapse',
        margin: '0px auto',
        backgroundColor: '#edeff4'}}>
      <TBody>
        <TR>
          <TD><EmptySpace height="40"/></TD>
        </TR>

        <TR>
          <TD align="center">

            {/* Centered column */}
            <Table
              width="600"
              align="center"
              style={{WebkitTextSizeAdjust: '100%',
                msTextSizeAdjust: '100%',
                msoTableLspace: '0pt',
                msoTableRspace: '0pt',
                borderCollapse: 'collapse',
                margin: '0px auto',
                backgroundColor: '#ffffff'}}>
              <TBody>
                <TR>
                  <TD>
                    {props.children}
                  </TD>
                </TR>
              </TBody>
            </Table>

          </TD>
        </TR>

        <TR>
          <TD><EmptySpace height="40"/></TD>
        </TR>

        {/* We don't care to run validation on this img tag, so leave as is
        <TR>
          <TD>
            <img
              src="https://example.com/tracker"
              height="1"
              style={{display: 'block', height: '1px', width: '1px'}} />
          </TD>
        </TR>
        */}
      </TBody>
    </Table>
  );
};
