import {betweenRange} from '../../Components/Filters/FilteringFunctions';


describe("betweenRange by price", () => {
  const passing = {price: 44}
  // const notPassing = {price: 222}
  const between40and200 = betweenRange(40, 200)
  const between40andNull = betweenRange(40, '')
  const betweenNullAnd200 = betweenRange('', 200)
  const betweenNullAndNull = betweenRange('', '')

  it("should pass if price between range", () => {
    expect(between40and200(passing)).toEqual(true)
  })

  it('it should fail if price below FROM', () => {
    expect(between40and200(30)).toEqual(false)
  })

  it('it should fail if price above TO', () => {
    expect(between40and200(250)).toEqual(false)
  })

  it('it should pass if FROM not provided', () => {
    expect(betweenNullAnd200(passing)).toEqual(true)
  })

  it('it should fail if FROM not provided and above TO', () => {
    expect(between40and200('', 250)).toEqual(false)
  })

  it('it should pass if  TO not provided', () => {
    expect(between40andNull(passing)).toEqual(true)
  })

  it('it should fail if TO not provided and below FROM', () => {
    expect(between40and200(30, '')).toEqual(false)
  })

  it('it should pass if  FROM and TO not provided', () => {
    expect(betweenNullAndNull(passing)).toEqual(true)
  })
}
)

