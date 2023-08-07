import dateFormat, { masks, i18n } from "dateformat";

i18n.dayNames = [
  "Min",
  "Sen",
  "Sel",
  "Rab",
  "Kam",
  "Jum",
  "Sab",
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jum'at",
  "Sabtu",
];

i18n.monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

i18n.timeNames = ["a", "p", "am", "pm", "A", "P", "AM", "PM"];

export function human(strTime){
	const date = new Date(strTime);
	return dateFormat(date,"dddd, d mmm yyyy HH:MM")
}

export function file(strTime){
  const date = new Date(strTime);
  return dateFormat(date,"yyyymmddHMMssL")
}