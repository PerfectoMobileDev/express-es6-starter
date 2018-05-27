import React from 'react';
import PropTypes from 'prop-types';
import {Table, TBody, TD, TR, Img} from 'oy-vey';

import EmptySpace from './EmptySpace.jsx';


const Header = (props) => {
  const style = {
    color: props.color,
    fontWeight: 'bold'
  };

  return (
    <Table
      width="100%"
      height="70"
      bgcolor={'#425563'}
      color={props.color}>
      <TBody>
        <TR>
          <TD>
            <EmptySpace height={10} />

            {/* Text area, could be another component, i.e. HeroText */}
            <Table width="100%">
              <TBody>
                <TR>
                  <TD width="20"><EmptySpace height="20" /></TD>
                  <TD
                    align="left"
                    style={{color: props.color, fontFamily: 'Arial'}}>
                    <Img alt="Perfecto"
                         style={{fontSize: '20px', fontFamily: 'open-sans', fontWeight: 800}}
                         width={111}
                         height={36}>
                    </Img>
                  </TD>
                </TR>
              </TBody>
            </Table>

            <EmptySpace height={10} />
          </TD>
        </TR>
      </TBody>
    </Table>
  );
};

Header.propTypes = {
  color: PropTypes.string.isRequired
};


export default Header;
