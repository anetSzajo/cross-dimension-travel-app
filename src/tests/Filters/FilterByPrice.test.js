import Filter from '../../Components/Filters/FilteringFunctions';


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

