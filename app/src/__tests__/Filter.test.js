import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Filter from '../Distance/filter';

Enzyme.configure({ adapter: new Adapter() });

// describe('Test Filter component', () => {
//   it('Test click event', () => {
//     const mockCallBack = jest.fn();

//     const filter = shallow((<Filter setCheckedProduct={mockCallBack}>Ok!</Filter>));
//     filter.find('radio').simulate('click');
//     expect(mockCallBack.mock.calls.length).toEqual(1);
//   });
// });

describe('<Filter />', () => {
  test('Click calls the parent function', () => {
    const mockFunction = jest.fn(); // Not sure if I remembered the syntax here, can keep it the same as it is on your side

    const filter = Enzyme.shallow(<Filter setUpdateFilter={mockFunction} />);
    filter.find('input').first().simulate('click');
    expect(mockFunction.mock.calls.length).toEqual(1);
  });
});