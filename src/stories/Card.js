import React from 'react';
import styled from 'styled-components';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';

import Text from '../Text';
import Card from '../Card';
import View from '../View';

const dimensions = object('Dimensions', {
  xs: { w: 310, h: 240 },
  sm: { w: 385, h: 285 },
  md: { w: 385, h: 285 },
  lg: { w: 385, h: 285 }
});
const imgHeights = object('Image heights', {
  xs: 130,
  sm: 165,
  md: 165,
  lg: 165
});

const dimensionsSquare = object('Dimensions', {
  xs: { w: '100%', h: 330 },
  sm: { w: 'calc(50% - 20px)', h: 330 },
  md: { w: 'calc(33% - 17px)', h: 330 },
  lg: { w: 'calc(33% - 17px)', h: 330 }
});
const imgHeightsSquare = object('Image heights', {
  xs: 330,
  sm: 330,
  md: 330,
  lg: 330
});

const ViewAdapter = styled(View)({
  flexDirection: 'row',
  flexWrap: 'wrap',
  '@media(max-width: 768px)': {
    flexDirection: 'column'
  }
});

storiesOf('Cards', module)
  .addDecorator(withKnobs)
  .add('img + text', () => (
    <View padding={100} container type="purewhite">
      <Card
        cover={text(
          'Cover',
          'https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg'
        )}
        color="rice"
        onClick={action('clicked')}
        clickable={boolean('Clickable', false)}
        zoom={boolean('Zoom', false)}
        dimensions={dimensions}
        imgHeight={imgHeights}
      >
        <Text type="h2">{text('Title', 'Curry')}</Text>
        <Text type="p1">
          {text(
            'Text',
            'Curry (/ˈkʌri/, sometimes /ˈkɜːri/, plural curries) is an umbrella term referring to a number of dishes originating in the cuisine of the Indian subcontinent. .'
          )}
        </Text>
      </Card>
    </View>
  ))
  .add('img', () => (
    <ViewAdapter container>
      <Card
        cover={text(
          'Cover',
          'https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg'
        )}
        color="rice"
        onClick={action('clicked')}
        clickable={boolean('Clickable', true)}
        zoom={boolean('Zoom', true)}
        dimensions={dimensionsSquare}
        imgHeight={imgHeightsSquare}
        style={{
          margin: 0,
          padding: 0,
          borderRadius: 5
        }}
        styleCont={{ padding: 0 }}
      />
      <Card
        cover={text(
          'Cover',
          'https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg'
        )}
        color="rice"
        onClick={action('clicked')}
        clickable={boolean('Clickable', true)}
        zoom={boolean('Zoom', true)}
        dimensions={dimensionsSquare}
        imgHeight={imgHeightsSquare}
        style={{
          margin: 0,
          padding: 0,
          borderRadius: 5
        }}
        styleCont={{ padding: 0 }}
      />
      <Card
        cover={text(
          'Cover',
          'https://upload.wikimedia.org/wikipedia/commons/1/1e/Indiandishes.jpg'
        )}
        color="rice"
        onClick={action('clicked')}
        clickable={boolean('Clickable', true)}
        zoom={boolean('Zoom', true)}
        dimensions={dimensionsSquare}
        imgHeight={imgHeightsSquare}
        style={{
          margin: '0px auto',
          padding: 0,
          borderRadius: 5
        }}
        styleCont={{ padding: 0 }}
      />
    </ViewAdapter>
  ));
