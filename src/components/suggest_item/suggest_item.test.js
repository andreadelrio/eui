import React from 'react';
import { render } from 'enzyme';
import { requiredProps } from '../../test/required_props';

import { EuiSuggestItem } from './suggest_item';

const TYPE = {
  iconType: 'search',
  color: 'itemTint01',
};

describe('EuiSuggestItem', () => {
  test('is rendered', () => {
    const component = render(<EuiSuggestItem {...requiredProps} type={TYPE} />);

    expect(component).toMatchSnapshot();
  });
});

describe('props', () => {
  const sampleItem = {
    type: { iconType: 'kqlValue', color: 'itemTint02' },
    label: 'Charles de Gaulle International Airport',
    description: 'This is the description',
  };

  describe('labelDisplay as expand', () => {
    test('is rendered', () => {
      const component = render(
        <EuiSuggestItem
          type={sampleItem.type}
          description={sampleItem.description}
          labelDisplay="expand"
        />
      );
      expect(component).toMatchSnapshot();
    });
  });

  describe('item with no description has expanded label', () => {
    test('is rendered', () => {
      const component = render(<EuiSuggestItem type={sampleItem.type} />);
      expect(component).toMatchSnapshot();
    });
  });
});