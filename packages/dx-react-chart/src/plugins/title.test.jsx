import * as React from 'react';
import { mount } from 'enzyme';
import { PluginHost, Template } from '@devexpress/dx-react-core';
import { pluginDepsToComponents } from '@devexpress/dx-react-core/test-utils';
import { Title } from './title';

const textComponent = () => null;

const defaultDeps = {
  template: {
    top: {},
  },
};

const defaultProps = {
  text: 'chart',
  textComponent,
  style: 'style',
};

describe('Title', () => {
  it('should render text', () => {
    const tree = mount((
      <PluginHost>
        {pluginDepsToComponents(defaultDeps)}

        <Title
          {...defaultProps}
        />
      </PluginHost>));

    expect(tree.find(textComponent).props().text)
      .toBe('chart');
  });

  it('should render other template with same name', () => {
    const tree = mount((
      <PluginHost>
        {pluginDepsToComponents(defaultDeps)}

        <Template name="top">
          <h1>
            other template
          </h1>
        </Template>
        <Title
          {...defaultProps}
        />
      </PluginHost>));

    expect(tree.find(textComponent).props().text)
      .toBe('chart');
    expect(tree.find('h1').text())
      .toBe('other template');
  });

  it('should pass style to text', () => {
    const tree = mount((
      <PluginHost>
        {pluginDepsToComponents(defaultDeps)}

        <Title
          {...defaultProps}
        />
      </PluginHost>));

    expect(tree.find(textComponent).props().style)
      .toBe('style');
  });
});
