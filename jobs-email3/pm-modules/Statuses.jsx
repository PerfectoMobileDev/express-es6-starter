import React from 'react';
import PropTypes from 'prop-types';
import { Table, TBody, TD, TR } from 'oy-vey';
import Status from './Status';
import { spaceStyle } from './SmallTitle';

const Statuses = (props) => {
  const {statuses} = props;
  const width = 100 / statuses.length;

  return (
    <Table width="100%">
      <TBody>
      <TR>
        <TD height="1" width="20%" style={spaceStyle}/>

        {statuses.map((status, key) =>
          <TD key={key} align="center" height="40px">
            <Status data={status} width={width}/>
          </TD>
        )}

        <TD height="1" width="20%" style={spaceStyle}/>
        </TR>
      </TBody>
    </Table>
  );
};

Statuses.propTypes = {
  statuses: PropTypes.array.isRequired
};

export default Statuses;
