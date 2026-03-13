# GitHub Auto Sync for Shared Hosting

This project includes a GitHub-based deployment flow for cPanel or Namecheap shared hosting that supports:

- `Node.js App`
- `SSH`
- `git`
- `npm`

## What it does

Every push to the `main` branch triggers GitHub Actions.

The workflow connects to your hosting account over `SSH`, then it:

1. Clones the GitHub repository on the first run
2. Fetches the newest commit from `origin/main`
3. Resets the hosting copy to the latest GitHub commit
4. Runs `npm ci`
5. Runs `npm run build`
6. Touches `tmp/restart.txt` to restart the cPanel Node.js app

Files:

- `.github/workflows/deploy-namecheap.yml`
- `scripts/deploy-from-github.sh`

## Required GitHub Secrets

Add these repository secrets in GitHub:

- `CPANEL_SSH_HOST`
- `CPANEL_SSH_PORT`
- `CPANEL_SSH_USER`
- `CPANEL_SSH_PRIVATE_KEY`
- `CPANEL_APP_ROOT`
- `CPANEL_REPO_URL`

Example values:

```text
CPANEL_SSH_HOST=server.example.com
CPANEL_SSH_PORT=21098
CPANEL_SSH_USER=cpaneluser
CPANEL_APP_ROOT=/home/cpaneluser/verify-business
CPANEL_REPO_URL=https://github.com/ahmedmokireldindevelopers/Verify-Business.git
```

## Server Requirements

Inside the hosting account, make sure that:

- the Node.js application already exists in `Setup Node.js App`
- the application root matches `CPANEL_APP_ROOT`
- the startup file is `server.js`
- `git --version` works in the hosting terminal
- `npm --version` works in the hosting terminal

## First-time setup

1. Create the Node.js app in cPanel.
2. Make sure `Application root` matches `CPANEL_APP_ROOT`.
3. Add the environment variables for the app in cPanel.
4. Add the GitHub repository secrets listed above.
5. Push to `main` or run the workflow manually from the `Actions` tab.

## Important limitation

This setup needs `SSH` access on the hosting account.

If your shared hosting plan does not provide `SSH`, GitHub cannot trigger a full automatic deploy. In that case, use cPanel `Git Version Control` and run `Update from Remote` plus `Deploy HEAD Commit` manually.
