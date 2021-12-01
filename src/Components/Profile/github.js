const { Octokit } = require("@octokit/core");
require('dotenv').config();
const token = process.env.token;
const poll = (owner, repo) => {
  const octokit = new Octokit({ auth: token});
  octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: owner,
    repo: repo
  }).then(response => {
    console.log(response);
  });

  setTimeout(() => poll(owner, repo), 3000);
}

export default poll;