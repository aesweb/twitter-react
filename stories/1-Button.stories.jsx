import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Button from '../components/button';
import NavigationButton from '../components/navigation-button';
import Navigation from '../components/navigation';
import { Home } from '../components/icons';
import TextTitle from '../components/text-title';
import ThemeButton from '../components/theme-button';
import Stack from '../components/stack';

export default {
  title: 'Buttons',
  decorators: [withKnobs]
};

export const Normal = () => <Button>Save</Button>;
export const Theme = () => (
  <Stack column>
    <ThemeButton>Tweet</ThemeButton>
    <ThemeButton full>Tweet Full</ThemeButton>
    <ThemeButton full big>
      Tweet Full and Big
    </ThemeButton>
  </Stack>
);
export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
);
export const Nav = () => {
  const flat = boolean('flat', false);
  return <Navigation flat={flat} selectedKey="home" />;
};
