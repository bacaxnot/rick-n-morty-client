/**
 * Function to create a number array of 1 spaced elements.
 * @param from First number of the sequence
 * @param to Last number of the sequence
 * @returns The 1 spaced sequence array. For example, with from=1 and to=3 the result will be [1,2,3]
 */
export const numberSequenceArray = (from: number, to: number) => {
    let res = []
    for (let i = from; i <= to; i++) res.push(i)
    return res
}
