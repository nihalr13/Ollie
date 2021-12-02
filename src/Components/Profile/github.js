import { CreateCodeReviewStory } from "../../CreateStory";

const { Octokit } = require("@octokit/core");
require('dotenv').config();
const token = process.env.token;
const poll = (owner, repo) => {
  const octokit = new Octokit({ auth: token});
  octokit.request('GET /repos/{owner}/{repo}/commits', {
    owner: owner,
    repo: repo
  }).then(response => {
    console.log(localStorage.oldCommit);
    if ((localStorage.oldCommit).localeCompare("0") == 0) {
      localStorage.oldCommit = response.data[0].sha;
    } else {
      var newCommit = response.data[0].sha;
      if (newCommit.localeCompare(localStorage.oldCommit) != 0) {
        localStorage.oldCommit = newCommit;
        //test code review
        CreateCodeReviewStory();
        //alert("hello");
      }
    }
    console.log(response);
  });


  setTimeout(() => poll(owner, repo), 3000);
}

export default poll;