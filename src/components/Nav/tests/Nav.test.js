import React from 'react';
import Nav from '../Nav';
import { mount } from '@shopify/react-testing';
import { StaticRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import PostModal from '../../PostModal';
import {PolarisTestProvider} from "@shopify/polaris";
import '@shopify/react-testing/matchers';


describe('<Nav />', () => {
  it('links to Home page', () => {
    const wrapper = mount(<PolarisTestProvider><StaticRouter><Nav /></StaticRouter></PolarisTestProvider>);
    expect(wrapper.find(NavLink, {to: '/'})).not.toBeNull();
  });

  it('links to Users page', () => {
    const wrapper = mount(<PolarisTestProvider><StaticRouter><Nav /></StaticRouter></PolarisTestProvider>);
    expect(wrapper.find(NavLink, {to: '/users'})).not.toBeNull();
  });

  it('links to Account page', () => {
    const wrapper = mount(<PolarisTestProvider><StaticRouter><Nav /></StaticRouter></PolarisTestProvider>);
    expect(wrapper.find(NavLink, {to: '/account'})).not.toBeNull();
  });

  it('renders the PostModal component', () => {
    const wrapper = mount(<PolarisTestProvider><StaticRouter><Nav /></StaticRouter></PolarisTestProvider>);
    expect(wrapper).toContainReactComponent(PostModal);
  });
}); 