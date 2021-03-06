## Getting Started
### Tools:
* NodeJS v10+ stable version: https://nodejs.org/en/
* Check NodeJS version: `node --version`
* Git v2.22+: https://git-scm.com/downloads
* Check git version: `git --version`

### Install Ionic 4/5 and Angular CLI 7/8:
* `npm install -g ionic`
* `ionic --version`
* `npm install -g @angular/cli`
* `ng --version`

### For a list of options for creating an app
* `ionic start --list`


### Create and Deploy a Blank Ionic/Angular App Locally
* `ionic start MyIonicApp blank --type=angular`
* `cd MyIonicApp`
* `ionic serve`

<br>

## Store and Share Codes in GitHub

### Push Codes to GitHub Repository
1. Log into GitHub.
2. Create a GitHub repository.
3. Copy the repo URL.
4. Go to your project root directory.
5. Initialize Git: `git init`
    * Note: This step has been done implicitly by the `ionic start ...` command. Re-initialize Git in case the .git directory somehow was not created.
6. Add a Git remote URL: `git remote add origin <REPO_URL>`
    * For example: `git remote add origin https://github.com/my-userid/my-repo.git`
7. Synch up local references with remote's: `git fetch`
8. Stage all local file changes: `git add .`
9. Assign changes to a commit hash: `git commit -m "Initial Ionic/Angular app."`
10. Push project to GitHub: `git push origin master`

<br>

## Ionic Generate Commands
    Notes:  Ensure Angular CLI has been installed.  Under the hood Ionic utilizes the Angular CLI to generate Angular framework features. 

| Angular Framework Features | Usage |
| -------------------------- | ---- |
| Component | `ionic g component my-new-component` |
| Directive | `ionic g directive my-new-directive` |
| Enum      | `ionic g enum my-new-enum` |
| Guard     | `ionic g guard services/my-new-guard`|
| Interface | `ionic g interface my-new-interface` |
| Module    | `ionic g module my-new-module` |
| Page      | `ionic g page pages/my-new-page` |
| Pipe      | `ionic g pipe my-new-pipe` |
| Service   | `ionic g service my-new-service` |

<br>

## References

|Name|URL|
|----|---|
|Medium|https://medium.com|
|Ionic Academy|https://ionicacademy.com|
|Ionic Theme|https://ionicthemes.com/tutorials|
|Alligator IO|https://alligator.io|
|Gajotres|https://www.gajotres.net|
|SitePoint|https://www.sitepoint.com/svelte-news-app-build|
|FreakyJolly| https://www.freakyjolly.com|

