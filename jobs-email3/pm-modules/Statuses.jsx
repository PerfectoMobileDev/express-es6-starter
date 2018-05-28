import React from 'react';
import PropTypes from 'prop-types';
import { Table, TBody, TD, TR } from 'oy-vey';
import Status from './Status';

const Statuses = (props) => {
  const {statuses} = props;
  const width = 100 / statuses.length;

  return (
    <Table width="100%">
      <TBody>
      <TR>
        {statuses.map((status, key) =>
          <TD key={key} align="center" heigh="40px">
            <Status data={status} width={width}/>
          </TD>
        )}
      </TR>
      </TBody>
    </Table>
  );
};

Statuses.propTypes = {
  statuses: PropTypes.array.isRequired
};

export default Statuses;
