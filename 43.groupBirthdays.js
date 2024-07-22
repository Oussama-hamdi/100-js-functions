function groupBirthdays(users, groupBy) {
    const myMap = new Map();

    for (let i = 0; i < users.length; ++i) {
        let userBirthday = users[i].birthday;
        if (groupBy === "month") {
            if (myMap.get(userBirthday.getMonth() + 1)) {
                myMap.get(userBirthday.getMonth() + 1).push(users[i])
            } else {
                myMap.set(userBirthday.getMonth() + 1, [users[i]]);
            }
        }
        if (groupBy === "year") {
            if (myMap.get(userBirthday.getFullYear())) {
                myMap.get(userBirthday.getFullYear()).push(users[i])
            } else {
                myMap.set(userBirthday.getFullYear(), [users[i]]);
            }
        }
        if (groupBy === "day") {
            if (myMap.get(userBirthday.getDate())) {
                myMap.get(userBirthday.getDate()).push(users[i])
            } else {
                myMap.set(userBirthday.getDate(), [users[i]]);
            }
        }
    }

    return myMap;
}