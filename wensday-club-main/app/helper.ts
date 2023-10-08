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

export function titleCase(str: string) {
    return str
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

export function getFormattedDate(date: Date): string {
    const currentTime = new Date();
    const numberOfDays = Math.floor(
        (currentTime.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (numberOfDays < 7) return numberOfDays + " days ago";
    else if (numberOfDays < 30)
        return Math.floor(numberOfDays / 7) + " weeks ago";
    else {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return `${day.toString().padStart(2, "0")}/${month
            .toString()
            .padStart(2, "0")}/${year}`;
    }
}
