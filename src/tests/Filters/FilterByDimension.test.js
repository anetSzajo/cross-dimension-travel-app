import {byDimension} from '../../Components/Filters/FilteringFunctions';


describe("filter by dimension", () => {

    const testingPlace = {
        dimension: "randomDimension"
    }

    const lowerCaseDimension = {
        dimension: "unknown"
    }

    const testingPlace3 = {
        dimension: "dimension"
    }

  it('should pass if dimension in database', () => {
    expect(byDimension("unknown")(lowerCaseDimension)).toEqual(true)
  })

  it('should pass if dimension in database and been written in uppercase', () => {
    expect(byDimension("UNKNOWN")(lowerCaseDimension)).toEqual(true)
    })

  it('should pass if dimension is empty string', () => {
    expect(byDimension('')(testingPlace)).toEqual(true)
  })

  it('should throw error if dimension is undefined', () => {
    expect(byDimension()).toThrowError(
        new Error('Dimension is undefined. Please pass string')
    )
  })

  it('should fail if dimension not in database', () => {
    expect(byDimension("unexistingDimension")(testingPlace3)).toEqual(false)
})

  it('should pass if existing dimension includes provided word', () => {
    expect(byDimension("rand")(testingPlace)).toEqual(true)
})

}
)



