function getMissingContacts(contactsMap) {
    const allUsers = Array.from(contactsMap.keys());
    const missingContactsMap = new Map();

    contactsMap.forEach((contacts, userId) => {
        const missingContacts = allUsers.filter(user => user !== userId && !contacts.includes(user));
        missingContactsMap.set(userId, missingContacts);
    });

    return missingContactsMap;
}