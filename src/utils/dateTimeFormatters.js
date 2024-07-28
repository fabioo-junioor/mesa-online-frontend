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

export {
    getDateToday,
    getHoursToday,
    compareDate,
    daysOfTheWeek
}