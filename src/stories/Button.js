import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs';

import Button from '../Button';
import View from '../View';
import Icon from '../Icon';

const optionsTemplate = {
  default: 'default',
  outlined: 'outlined',
  link: 'link',
  dynamic: 'dynamic'
};
const optionsColor = {
  black: 'black',
  yellow: 'yellow',
  blue: 'blue',
  red: 'red',
  wasabi: 'wasabi',
  sashimi: 'sashimi',
  transparent: 'transparent'
};
storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const defaultTeamplate = 'default';
    const defaultColor = 'black';
    const defaultBackgroundColor = 'wasabi';

    const label = 'Theme';
    const label2 = 'Color';
    const label3 = 'Background';

    const template = select(label, optionsTemplate, defaultTeamplate);
    const color = select(label2, optionsColor, defaultColor);
    const background = select(label3, optionsColor, defaultBackgroundColor);

    return (
      <View
        style={{ width: '100vw', height: '100vh' }}
        container
        align="center"
        justify="center"
        direction="column"
      >
        <Button
          color={color}
          type={background}
          bold={boolean('Bold', true)}
          disabled={boolean('Disabled', false)}
          uppercase={boolean('Uppercase', true)}
          template={template}
          noanim={boolean('No Animation', false)}
        >
          {text('text 1', 'Button')}
        </Button>
      </View>
    );
  })
  .add('with icon', () => {
    const defaultTeamplate = 'default';
    const defaultColor = 'black';
    const defaultIconColor = 'red';
    const defaultBackground = 'wasabi';

    const label = 'Theme';
    const label2 = 'Color';
    const label3 = 'Icon Color';
    const label4 = 'Background Color';

    const template = select(label, optionsTemplate, defaultTeamplate);
    const color = select(label2, optionsColor, defaultColor);
    const iconColor = select(label3, optionsColor, defaultIconColor);
    const background = select(label4, optionsColor, defaultBackground);

    return (
      <View
        style={{ width: '100vw', height: '100vh' }}
        container
        align="center"
        justify="center"
        direction="column"
      >
        <Button
          padding={text('Padding', '0')}
          color={color}
          type={background}
          bold={boolean('Bold', true)}
          disabled={boolean('Disabled', false)}
          uppercase={boolean('Uppercase', true)}
          template={template}
          noanim={boolean('No Animation', false)}
        >
          <View width={150} justify="space-evenly" align="center">
            {text('text 1', 'Button')}
            <Icon
              font={text('Icon Font', 'fa')}
              name={text('Icon name (FA)', 'comment')}
              size={number('Icon fontSize', 22)}
              color={iconColor}
            />
          </View>
        </Button>
      </View>
    );
  })
  .add('with icon only', () => {
    const defaultTeamplate = 'default';
    const defaultborderColor = 'black';
    const defaultColor = 'red';
    const defaultBackgroundColor = 'wasabi';

    const label = 'Theme';
    const label2 = 'Color';
    const label3 = 'Icon Color';
    const label4 = 'Background';

    const template = select(label, optionsTemplate, defaultTeamplate);
    const borderColor = select(label2, optionsColor, defaultborderColor);
    const iconColor = select(label3, optionsColor, defaultColor);
    const background = select(label4, optionsColor, defaultBackgroundColor);

    return (
      <View
        style={{ width: '100vw', height: '100vh' }}
        container
        align="center"
        justify="center"
        direction="column"
      >
        <Button
          padding={text('Padding', '0')}
          shape="round"
          color={borderColor}
          type={background}
          bold={boolean('Bold', true)}
          disabled={boolean('Disabled', false)}
          uppercase={boolean('Uppercase', true)}
          template={template}
          noanim={boolean('No Animation', false)}
        >
          <Icon
            font={text('Icon Font', 'fa')}
            name={text('Icon name (FA)', 'comment')}
            size={number('Icon fontSize', 22)}
            color={iconColor}
          />
        </Button>
      </View>
    );
  });
