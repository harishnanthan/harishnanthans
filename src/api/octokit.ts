import { Octokit } from 'octokit';

interface APIS {
  GET_ALL_REPOS: () => Promise<object>;
  GET_REPO: (name: string) => Promise<object>
}

class GitHubAPI implements APIS {
  private octokit: Octokit;

  constructor(personalToken: string) {
    this.octokit = new Octokit({
      auth: personalToken,
    });
  }

  GET_ALL_REPOS = async () => {
    return await this.octokit.request(`GET /users/harishnanthan/repos`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
  };

  GET_REPO = async (name: string) => {
    return await this.octokit.request(`GET /repos/harishnanthan/${name}`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
  }
}

const personalToken: string = import.meta.env.VITE_PERSONAL_TOKEN as string;

const githubAPI: APIS = new GitHubAPI(personalToken);

export default githubAPI;