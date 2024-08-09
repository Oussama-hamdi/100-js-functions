function findFreeCalendarSpots(meetings) {

    const timeToMinutes = ({ hours, minutes }) => hours * 60 + minutes;
    const minutesToTime = (minutes) => ({
      hours: Math.floor(minutes / 60),
      minutes: minutes % 60
    });
  
    const WORKING_HOURS_START = timeToMinutes({ hours: 9, minutes: 0 });
    const WORKING_HOURS_END = timeToMinutes({ hours: 17, minutes: 0 });
  
    // Convert meetings to intervals and sort
    const intervals = meetings.map(m => ({
      start: timeToMinutes(m.startTime),
      end: timeToMinutes(m.startTime) + m.duration
    })).sort((a, b) => a.start - b.start);
  
    // Add working hours boundaries
    intervals.unshift({ start: WORKING_HOURS_START, end: WORKING_HOURS_START });
    intervals.push({ start: WORKING_HOURS_END, end: WORKING_HOURS_END });
  
    // Find gaps between intervals
    const freeSpots = [];
    for (let i = 0; i < intervals.length - 1; i++) {
      const gapStart = intervals[i].end;
      const gapEnd = intervals[i + 1].start;
      if (gapEnd > gapStart) {
        freeSpots.push({
          duration: gapEnd - gapStart,
          startTime: minutesToTime(gapStart)
        });
      }
    }
  
    return freeSpots;
}