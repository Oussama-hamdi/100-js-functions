function isSameWeek(date1, date2) {
    function getMonday(date) {
      const newDate = new Date(date);
      const day = newDate.getDay();
      
      const diff = day === 0 ? -6 : 1 - day;
      
      newDate.setDate(newDate.getDate() + diff);
      return newDate;
    }
  
    const monday1 = getMonday(date1);
    const monday2 = getMonday(date2);
  
    return monday1.toDateString() === monday2.toDateString();
}