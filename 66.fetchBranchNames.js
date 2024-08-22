async function fetchBranchNames(username, repo) {
    let branches = [];
    let page = 1;
    const perPage = 100;
  
    while (true) {
      const API_URL = `https://api.github.com/repos/${username}/${repo}/branches?per_page=${perPage}&page=${page}`;
  
      try {
        const response = await fetch(API_URL);
  
        if (!response.ok) {
          return [];
        }
  
        const data = await response.json();
  
        if (data.length === 0) {
          break;
        }
  
        branches = branches.concat(data.map((branch) => branch.name));
  
        page++;
      } catch (err) {
        return [];
      }
    }
  
    return branches;
}