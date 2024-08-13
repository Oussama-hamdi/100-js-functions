async function fetchNamesOfAllPublicRepos(username) {
    const API_URL = `https://api.github.com/users/${username}/repos?per_page=100`;
  
    const data = await fetch(API_URL).then((res) => res.json()).then((data) => data.map((repo) => repo.name)).catch(() => [])
  
    return data;
}