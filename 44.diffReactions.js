function diffReactions(yesterdayReactions, todayReactions) {
    const changes = [];

    const allUserIds = new Set([...Object.keys(yesterdayReactions), ...Object.keys(todayReactions)]);

    allUserIds.forEach(userId => {
        const yesterday = new Set(yesterdayReactions[userId] || []);
        const today = new Set(todayReactions[userId] || []);

        today.forEach(reaction => {
            if (!yesterday.has(reaction)) {
                changes.push(`${userId} reacted with ${reaction}`);
            }
        });

        yesterday.forEach(reaction => {
            if (!today.has(reaction)) {
                changes.push(`${userId} removed their ${reaction}`);
            }
        });
    });

    return changes;
}