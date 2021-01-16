import React from 'react';
import Footer from '../Footer';
import { mount } from '@shopify/react-testing';

describe('<Footer />', () => {
  it('displays the current year', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.text()).toContain('2021');
  });

  it('displays the site owner', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.text()).toContain('David McGurrin');
  });
}); 