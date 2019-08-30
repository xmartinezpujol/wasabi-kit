import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Input from '../Input';
import View from '../View';

const optionsShape = {
  round: 'round',
  square: 'square',
  default: 'default'
};

const optionsBorder = {
  night: 'night',
  sashimi: 'sashimi',
  wasabi: 'wasabi',
  wasabiRad: 'wasabiRad',
  blue: 'blue'
};

const labelShape = 'Shape';
const labelBorderColor = 'Border Color';
const defaultShape = 'default';
const defaultborderColor = 'text';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const shape = select(labelShape, optionsShape, defaultShape);
    const borderColor = select(labelBorderColor, optionsBorder, defaultborderColor);

    return (
      <View
        style={{ width: '100vw', height: '100vh' }}
        container
        align="center"
        justify="center"
        direction="column"
      >
        <Input
          style={{ width: 300 }}
          disabled={boolean('Disabled', false)}
          placeholder={text('Placeholder', 'Text here...')}
          borderColor={borderColor}
          shape={shape}
          type={text('Type (text/password/numeric): ', 'text')}
          icon={text('Icon (fa/custom): ', 'fa fa-car')}
          togglePassword={boolean(
            'Allow toggle password visibility ( must be type=password ): ',
            false
          )}
          loading={boolean('Show animation while loading: ', false)}
          outerStyle={JSON.parse(text('Styles:  ', '{}'))}
        />
      </View>
    );
  });
