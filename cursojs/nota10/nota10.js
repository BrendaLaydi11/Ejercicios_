 var n = '\xa9'
var m = '\xa8'
var o = '\u00A9'
String.fromCodePoint(42);
var s = new String('Empieza')
var msPerDay = 24 * 60 * 60 * 1000;
var january092020 = new Date(msPerDay * (44 * 365 + 11 + 197));
var options = {
    year: "2-digit", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", timeZoneName: "short"
};
var americanDateTime = new Intl.DateTimeFormat("en-US", options).format;

document.write(americanDateTime(january092020)); // 07/16/14, 5:00 PM PDT

var gasPrice = new Intl.NumberFormat("en-US",
    {
        style: "currency", currency: "USD",
        minimumFractionDigits: 3
    });

console.log(gasPrice.format(5.259)); // $5.259

document.write(s, n, m, o);typeof s;

var price = new Intl.NumberFormat("en-MX",
    {
        style: "currency", currency: "USD",
        maximumFractionDigits: 3
    });
document.write(price.format(55.55 + "<br>"))

