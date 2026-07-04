import axios from "axios";

export default async function fetchRepos(): Promise<any[]> {
  try {
    const token = import.meta.env.GITHUB_AUTH_TOKEN || process.env.GITHUB_AUTH_TOKEN;
    const headers: Record<string, string> = {
      "X-GitHub-Api-Version": "2022-11-28",
      Accept: "application/vnd.github+json",
    };
    if (token) headers.Authorization = `Bearer ${token}`;

    const { data } = await axios.get(
      "https://api.github.com/users/YugandharrPatil/repos",
      {
        params: { per_page: 100 },
        headers,
      },
    );
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("fetchRepos() failed:", err);
    return [];
  }
}
