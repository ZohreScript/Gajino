const farsiDigits: string[] = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbersWithComma(n: number): string {
  const numWithCommas: string = numberWithCommas(n);
  
  return toPersianNumbers(numWithCommas);
}

function numberWithCommas(x: number): string {
  return x.toLocaleString(); }

export function toPersianNumbers(n: string | number): string {
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}

export function toPersianNumbersInText(text: string): string {
    return text.replace(/\d+/g, (match) => {
        return toPersianNumbersWithComma(Number(match));
    });
}
