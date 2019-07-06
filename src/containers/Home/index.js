import React from 'react';

import Button from '../../components/Button';
import View from '../../components/View';
import Text from '../../components/Text';

import COLOR_PALETTE from '../../Constants';

const Home = () => (
  <View direction="column" height="100vh" type="rice">
    <View height={50} type="lightTea" />
    <View height={300} padding={40} type="rice">
      <View
        align="space-between"
        justify="space-between"
        type="purewhite"
        container
        padding={50}
        round={20}
        style={{
          boxShadow: 'rgba(0, 0, 0, 0.12) 0px 19px 70px 0px',
        }}
      >
        <Text accentColor={COLOR_PALETTE.greenTea} style={{ margin: 0 }} type="h1" >
          <strong>Wasabi Studio </strong> to the Rescue! 🦸
        </Text>
        <Button
          bold
          shape="round"
          template="dynamic"
          style={{
            fontSize: 25,
            letterSpacing: 0.5,
            padding: '10px 35px',
            alignSelf: 'flex-end',
          }}
        >
          {'Lets do This!  🚀'}
        </Button>
      </View>
    </View>
  </View>
);

export default Home;
