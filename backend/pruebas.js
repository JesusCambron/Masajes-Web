const fecha = "2020-11-2 3:30:00";
const minutosToAdd = 30;
const date = new Date(fecha);
const dateEnd = new Date(date.getTime()+ minutosToAdd*60000);
console.log(date);
console.log(dateEnd);