import React from 'react';
import Layout from "../../components/Layouts/Layout"
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
const Home = () => {
  return (
    <>
    <Layout>
      {/* home section hero banner */}
      <Section1></Section1>

      {/* home section About */}
      <Section2></Section2>

      {/* Home section Menu */}
      <Section3></Section3>

      {/* Home section promotion */}
      <Section4></Section4>

      {/* HOme Section Shop  */}
      <Section5></Section5>

      {/* home Review section */}
      <Section6></Section6>
      
      {/* home contact section */}
      <Section7></Section7>
      
    </Layout>
    </>
  )
}

export default Home
