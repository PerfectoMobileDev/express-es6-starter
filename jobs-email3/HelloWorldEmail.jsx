import React from 'react';

import Layout from './layouts/Layout.jsx';

import Header from './modules/Header.jsx';
import Body from './modules/Body.jsx';
import Footer from './modules/Footer.jsx';


export class HelloWorldEmail extends React.Component {
  render() {
    return (
      <Layout>
        <Header color="#ffffff" />

        <Body>
        Here you go, your build is ready!
        </Body>

        <Footer color="#134ac0" />
      </Layout>
    );
  }
}
