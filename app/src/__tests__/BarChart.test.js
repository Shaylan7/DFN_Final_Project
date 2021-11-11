import React from 'react';
import BarChart from '../Data/BarChart';
import { create } from 'react-test-renderer'; 

describe('My first snapshot test',()=>{
    test('testing BarChart component', () => {
    let tree = create(<BarChart />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})