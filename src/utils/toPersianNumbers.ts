const farsiDigits: string[] = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

export function toPersianNumbersWithComma(n: number): string {
  // ابتدا عدد را به رشته‌ای با جداکننده‌های کاما تبدیل می‌کنیم
  const numWithCommas: string = numberWithCommas(n);
  
  // سپس اعداد انگلیسی در این رشته را به اعداد فارسی تبدیل می‌کنیم
  return toPersianNumbers(numWithCommas);
}

function numberWithCommas(x: number): string {
  // عدد را به رشته‌ای تبدیل می‌کنیم و هر سه رقم را با کاما جدا می‌کنیم
  return x.toLocaleString(); // استفاده از toLocaleString برای جدا کردن هزارگان
}

export function toPersianNumbers(n: string | number): string {
  // اعداد انگلیسی را به اعداد فارسی تبدیل می‌کنیم
  return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}

export function toPersianNumbersInText(text: string): string {
    // یافتن تمامی اعداد در متن و تبدیل آن‌ها به اعداد فارسی همراه با کاما
    return text.replace(/\d+/g, (match) => {
        // عدد را به فارسی با کاما تبدیل می‌کنیم
        return toPersianNumbersWithComma(Number(match));
    });
}
