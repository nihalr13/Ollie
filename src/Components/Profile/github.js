const { Octokit } = require("@octokit/core");

const poll = (owner, repo) => {
  const octokit = new Octokit({ auth: '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' });
  octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: owner,
    repo: repo
  }).then(response => {
    console.log(response);
  });

  setTimeout(() => poll(owner, repo), 3000);
}

export default poll;