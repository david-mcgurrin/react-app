import React from 'react';
import Account from '../Account';
import UserPosts from '../../UserPosts';
import { MockedProvider } from '@apollo/client/testing';
import { mount } from '@shopify/react-testing';
import '@shopify/react-testing/matchers';

describe('<Account />', () => {
  it('renders the UserPosts component', () => {
    const wrapper = mount(<MockedProvider><Account/></MockedProvider>);
    expect(wrapper).toContainReactComponent(UserPosts);
  });
}); 