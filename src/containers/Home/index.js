import React from 'react';

import Button from '../../components/Button';
import View from '../../components/View';
import Text from '../../components/Text';

const Home = () => (
  <View padding={40} height="100vh" type="wasabiRad">
    <View
      align="space-between"
      justify="space-between"
      height={300}
      type="purewhite"
      container
      padding={50}
      round={20}
    >
      <Text style={{ margin: 0 }} type="h1" >Wasabi Studio to the Rescue! 🦸</Text>
      <Button
        bold
        uppercase
        template="dynamic"
      >
        {'Lets do This!'}
      </Button>
    </View>
  </View>
);

export default Home;
