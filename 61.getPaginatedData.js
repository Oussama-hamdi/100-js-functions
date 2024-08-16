function getPaginatedData(users, sortBy, direction, perPage, pageNumber) {
    const sortedUsers = users.sort((a, b) => {
          if (a[sortBy] < b[sortBy]) {
              return direction === 'asc' ? -1 : 1;
          }
          if (a[sortBy] > b[sortBy]) {
              return direction === 'asc' ? 1 : -1;
          }
          return 0;
      });
  
      const startIndex = (pageNumber - 1) * perPage;
      const endIndex = startIndex + perPage;
  
      return sortedUsers.slice(startIndex, endIndex);
}