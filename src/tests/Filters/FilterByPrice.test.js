import {betweenRange} from '../../Components/Filters/FilteringFunctions';


describe("betweenRange by price", () => {

  it("should work", () => {

    const passing = {price: 44}
    const notPassing = {price: 222}
    const between40and200 = betweenRange(40, 200)
    const between40andNull = betweenRange(40, '')

    expect(between40and200(passing)).toEqual(true)
    expect(between40and200(notPassing)).toEqual(false)
    expect(between40andNull(passing)).toEqual(true)
  }
  )
})

