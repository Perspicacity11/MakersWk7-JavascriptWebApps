const GithubClient = require("./githubClient");
const GithubModel = require("./githubModel");
const GithubView = require("./githubView");

const client = new GithubClient();
const model = new GithubModel();
const view = new GithubView(model, client);