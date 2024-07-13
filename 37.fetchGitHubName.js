async function fetchGitHubName(username) {
    let githubApi = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(githubApi);

        if (!response.ok) {
            return null;
        }

        const data = await response.json();
        return data.name || null;
    } catch (err) {
        return null;
    }
}