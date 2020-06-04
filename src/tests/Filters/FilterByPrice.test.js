import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';
import Filter from '../../Components/Filters/FilterByPrice/Filter';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'


describe("Filter by price", () => {

  it("should work", () => {
    
    const passing = {price: 44}
    const notPassing = {price: 222}
    const filterBetween40and200 = Filter(40, 200)

    expect(filterBetween40and200(passing)).toEqual(true)
    expect(filterBetween40and200(notPassing)).toEqual(false)
  }
  )
})

