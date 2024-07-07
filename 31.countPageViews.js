function countPageViews(pageViews, country, interval) {
    let count = 0;

    pageViews.forEach((data) => {
        if (data.country === country && new Date(data.date) >= interval.startDate && new Date(data.date) <= interval.endDate) {
            count += data.count
        }
    }) 

    return count;
}