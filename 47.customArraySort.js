function customArraySort(users, currentUserId) {
    const sortedUsers = [[], [], [], [], []];

    users.forEach((user) => {
        if (user.id === currentUserId) {
            sortedUsers[0].push(user);
        } else if (user.age >= 35 && user.age < 50) {
            sortedUsers[1].push(user);
        } else if (user.age < 18) {
            sortedUsers[2].push(user);
        } else if (user.age >= 50) {
            sortedUsers[3].push(user);
        } else if (user.age >= 18 && user.age < 35) {
            sortedUsers[4].push(user);
        }
    })

    sortedUsers.forEach(group => group.sort((a, b) => b.age - a.age));
    
    return sortedUsers.reduce((acc, cur) => acc.concat(cur), []);
}