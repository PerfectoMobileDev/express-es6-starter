import React from 'react';
import PropTypes from 'prop-types';
import { Table, TBody, TD, TR } from 'oy-vey';

const colors = {
  'TESTS': '#222',
  'SUCCESS': '#82bc41',
  'FAILED': '#c8102e',
  'unknown': '#BBB'
};


const Status = ({data, width}) => {
  const textStyle = {
    color: colors[data.name]
  };

  return (
    <Table width={width + '%'}>
      <TBody>
      <TR align='center'
          style={textStyle}>
        <TD style={{fontSize: '36px'}}>
          {data.value}
        </TD>
      </TR>
      <TR align='center'
          style={textStyle}>
        <TD  style={{fontSize: '12px'}}>{data.name}</TD>
      </TR>
      </TBody>
    </Table>

  );
};

Status.propTypes = {
  data: PropTypes.object.isRequired
};

export default Status;