const getDateToday = () => {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    if(day < 10 && month < 10){
        return `0${day}-0${month}-${year}`;

    }
    if(day < 10 && month > 10){
        return `0${day}-${month}-${year}`;

    }
    if(day > 10 && month < 10){
        return `${day}-0${month}-${year}`;
        
    }
    return `${day}-${month}-${year}`;
   
    
}
const getHoursToday = () => {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if(hours < 10 && minutes < 10){
       return `0${hours}:0${minutes}`;

    }
    if(hours < 10 && minutes > 10){
       return `0${hours}:${minutes}`;

    }
    if(hours > 10 && minutes < 10){
        return `${hours}:0${minutes}`;
        
    }
    return `${hours}:${minutes}`;

}
const compareDate = (date) => {
    let parts = date.split('-');
    let today = new Date();
    date = new Date(parts[2], parts[1] - 1, parts[0]);
    
    return (date >= today) || false;

}
const daysOfTheWeek = (day) => {
    let formatDay = day.toLowerCase();
    let daysWeek = [
        {sun: 'Domingo'}, {mon: 'Segunda'},
        {tue: 'Terça'}, {wed: 'Quarta'},
        {thu: 'Quinta'}, {fri: 'Sexta'},
        {sat: 'Sabado'}
    ];
    return daysWeek.filter(i => formatDay == Object.keys(i))[0][formatDay];

}
const verifyEstablishmentIsOpen = (schedules) => {
    let hoursToday = getHoursToday();
    let dayWeekToday = String(new Date()).slice(0, 3);
    dayWeekToday = dayWeekToday.toLowerCase();

    for(let i = 0; i < schedules.length; i++){
        if(String(Object.keys(schedules[i])) === dayWeekToday){
            if(((schedules[i][dayWeekToday]['manha']['abertura'] <= hoursToday) && (schedules[i][dayWeekToday]['manha']['fechamento'] > hoursToday)) ||
                ((schedules[i][dayWeekToday]['tarde']['abertura'] <= hoursToday) && (schedules[i][dayWeekToday]['tarde']['fechamento'] > hoursToday)) ||
                ((schedules[i][dayWeekToday]['noite']['abertura'] <= hoursToday) && (schedules[i][dayWeekToday]['noite']['fechamento'] > hoursToday))){
                return true;

            }
            return false;

        }
    }
    return false;
    
}
const verifyEstablishmentSchedulesReservation = (dateReservation, hoursReservation, schedules) => {
    let parts = dateReservation.split('-');
    dateReservation = new Date(parts[2], parts[1] - 1, parts[0]);
    let dayWeek = String(dateReservation).slice(0, 3);
    dayWeek = dayWeek.toLowerCase();

    for(let i = 0; i < schedules.length; i++){
        if(String(Object.keys(schedules[i])) === dayWeek){
            if(((schedules[i][dayWeek]['manha']['abertura'] <= hoursReservation) && (schedules[i][dayWeek]['manha']['fechamento'] > hoursReservation)) ||
                ((schedules[i][dayWeek]['tarde']['abertura'] <= hoursReservation) && (schedules[i][dayWeek]['tarde']['fechamento'] > hoursReservation)) ||
                ((schedules[i][dayWeek]['noite']['abertura'] <= hoursReservation) && (schedules[i][dayWeek]['noite']['fechamento'] > hoursReservation))){
                return true;

            }
            return false;

        }
    }
    return false;

}

export {
    getDateToday,
    getHoursToday,
    compareDate,
    daysOfTheWeek,
    verifyEstablishmentIsOpen,
    verifyEstablishmentSchedulesReservation
}