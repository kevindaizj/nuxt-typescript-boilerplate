export function numberDec(num: number, decimalPlaces: number = 2): number {
    let times = 10 * decimalPlaces;
    if (times === 0)
        times = 1;

    const str = (Math.round(num * times) / times).toFixed(decimalPlaces);
    return parseFloat(str);
}