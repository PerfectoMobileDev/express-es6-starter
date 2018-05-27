import React from 'react';
import PropTypes from 'prop-types';
import {Table, TBody, TR, TD, A} from 'oy-vey';

import EmptySpace from './EmptySpace.jsx';


const Footer = (props) => {
  const style = {
    color: props.color,
    backgroundColor: '#f4f6fb',
  };

  const spaceStyle = {
    lineHeight: '1px',
    fontSize: '1px'
  };

  return (
    <Table
      width="100%"
      style={style}>
      <TBody>

        <TR>
          <TD><EmptySpace height="16" /></TD>
          <TD><EmptySpace height="16" /></TD>
          <TD><EmptySpace height="16" /></TD>
        </TR>

        <TR>
          <TD
            height="1"
            width="226"
            style={spaceStyle}>&nbsp;</TD>

          <TD>
            <Table width="149">
              <TBody>
                <TR>
                  <TD
                    align="center"
                    bgcolor="#0086BF"
                    style={{fontFamily: 'sans-serif'}}>

                    <EmptySpace height="10" />

                    <A
                      style={{color: '#ffffff', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px'}}
                      href="https://branchtest.reporting.perfectomobile.com/library">VIEW BUILD</A>

                    <EmptySpace height="10" />
                  </TD>
                </TR>
              </TBody>
            </Table>
          </TD>

          <TD
            height="1"
            width="226"
            style={spaceStyle}>&nbsp;</TD>
        </TR>

        <TR>
          <TD><EmptySpace height="16" /></TD>
          <TD><EmptySpace height="16" /></TD>
          <TD><EmptySpace height="16" /></TD>
        </TR>
      </TBody>
    </Table>
  );
};

Footer.propTypes = {
  color: PropTypes.string.isRequired
};


export default Footer;
