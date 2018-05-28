import React from 'react';
import PropTypes from 'prop-types';
import { Table, TBody, TD, TR } from 'oy-vey';

const colors = {
  'total': '#222',
  'success': '#82bc41',
  'failed': '#c8102e',
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
        <TD style={{fontSize: '26px', fontWeight: 600}}>
          {data.value}
        </TD>
      </TR>
      <TR align='center'
          style={textStyle}>
        <TD  style={{fontSize: '18px', fontWeight: 400}}>{data.name}</TD>
      </TR>
      </TBody>
    </Table>

  );
};

Status.propTypes = {
  data: PropTypes.object.isRequired
};

export default Status;