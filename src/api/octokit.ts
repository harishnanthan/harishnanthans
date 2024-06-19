import { Octokit } from 'octokit';

type Repo = {
  name: string;
  language: string;
  description: string;
};

type RepoResponse = {
  data: Repo[];
};

type SingleRepoResponse = {
  data: Repo;
};

interface APIS {
  GET_ALL_REPOS: () => Promise<RepoResponse>;
  GET_REPO: (name: string) => Promise<SingleRepoResponse>;
}

class GitHubAPI implements APIS {
  private octokit: Octokit;

  constructor(personalToken: string) {
    this.octokit = new Octokit({
      auth: personalToken,
    });
  }

  GET_ALL_REPOS = async (): Promise<RepoResponse> => {
    const response = await this.octokit.request('GET /users/harishnanthan/repos', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    return response as RepoResponse;
  };

  GET_REPO = async (name: string): Promise<SingleRepoResponse> => {
    const response = await this.octokit.request(`GET /repos/harishnanthan/${name}`, {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });
    return response as SingleRepoResponse;
  };
}

const personalToken: string = import.meta.env.VITE_PERSONAL_TOKEN as string;

const githubAPI: APIS = new GitHubAPI(personalToken);

export default githubAPI;
