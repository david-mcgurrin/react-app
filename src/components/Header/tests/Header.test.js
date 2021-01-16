import React from 'react';
import Header from '../Header';
import { StaticRouter } from 'react-router';
import { Link } from "react-router-dom";
import Nav from '../../Nav';
import { mount } from '@shopify/react-testing';
import {PolarisTestProvider} from "@shopify/polaris";
import '@shopify/react-testing/matchers';

describe('<Header />', () => {
  it('links to Home page', () => {
    const wrapper = mount(<PolarisTestProvider><StaticRouter><Header /></StaticRouter></PolarisTestProvider>);
    expect(wrapper.find(Link, {to: '/'})).not.toBeNull();
  });

  it('renders the Nav component', () => {
    const wrapper = mount(<PolarisTestProvider><StaticRouter><Header /></StaticRouter></PolarisTestProvider>);
    expect(wrapper).toContainReactComponent(Nav);
  });
}); 