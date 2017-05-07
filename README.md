# PropertyWizardWeb
Property Wizard Web site.


# Deploy NodeJS on Windows server

1. Install NodeJS.
1. Restart (because node and npm should be visible from command line)
1. In the web site folder run "npm install"


# TeamCity and SSH Key

1. Create a SSH Key using some tool, for example SourceTree open the Putty Key generator
1. Save a private key as <key name>.ppk
1. Upload it on the server (ex. C:\Data\SSH keys\<key name>.ppk)
1. Create a deploy key in Git.
    Write "rsa" followed by a space and/or new line and the public part of the key
1. In TeamCity VCS settings select the "Custom private key" option in Authentication Settings.
1. Set the username and the path to the key.
1. For PAssphrase I used my email. (?)
