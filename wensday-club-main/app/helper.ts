export function formatCompactNumber(number: number): string | number {
    if (number < 0) {
        return "-" + formatCompactNumber(-1 * number);
    }
    if (number >= 1000 && number < 1_000_000) {
        return (Math.floor((number / 1_000) * 10) / 10).toFixed(1) + "K";
    } else if (number >= 1_000_000) {
        return (Math.floor((number / 1_000_000) * 10) / 10).toFixed(1) + "M";
    }
    return number;
}
