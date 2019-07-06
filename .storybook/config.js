import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import wasabi from "./wasabi";

// Option defaults.
addParameters({
  options: {
    theme: wasabi,
  },
});

function loadStories() {
  require('../src/stories/index.js');
}

configure(loadStories, module);
