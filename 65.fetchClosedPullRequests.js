async function fetchClosedPullRequests(username, repo) {
    const API_URL = `https://api.github.com/repos/${username}/${repo}/pulls?state=closed&per_page=100`;
    let closedPullRequestIds = [];
    let page = 1;
    let hasMorePages = true;

    try {
        while (hasMorePages) {
            const response = await fetch(`${API_URL}&page=${page}`);
            if (!response.ok) {
                return [];
            }

            const pullRequests = await response.json();

            if (pullRequests.length === 0) {
                hasMorePages = false;
            } else {
                closedPullRequestIds = closedPullRequestIds.concat(pullRequests.map(pr => pr.id));
                page++; // Go to the next page
            }
        }

        return closedPullRequestIds;
    } catch (error) {
        return [];
    }
}