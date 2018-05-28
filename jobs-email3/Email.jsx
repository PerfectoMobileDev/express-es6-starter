import React from 'react';

import Layout from './layouts/Layout.jsx';

import Header from './modules/Header.jsx';
import Body from './modules/Body.jsx';
import Footer from './modules/Footer.jsx';

import Info from './pm-modules/Info';
import Bars from './pm-modules/Bars';
import Rate from './pm-modules/Rate';
import SmallTitle from './pm-modules/SmallTitle';


const Email = ({name, history}) => {
  return (
    <Layout>
      <Header color="#ffffff"/>

      <Body>
      <Info name={name}/>
      <Rate/>
      <SmallTitle title={'HISTORY'}/>
      <Bars history={history}/>
      </Body>

      <Footer color="#134ac0"/>
    </Layout>
  );
};

export default Email;