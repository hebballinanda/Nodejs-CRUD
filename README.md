# Nodejs-CRUD
## SSH is preferred for Git operations because it's more secure and avoids the need for repeated authentication prompts

### 1. Check for an Existing .ssh Folder

- Linux/macOS
```bash
  ls -a ~/.ssh
```
- Windows
```bash
  mkdir C:\Users\YourUsername\.ssh 
```
#### If the .ssh folder exists, check if it contains keys (id_rsa and id_rsa.pub files). If it doesn’t exist or you want to create a new key, continue.

### 2. Generate an SSH Key

#### Open a terminal (Command Prompt, PowerShell, or Git Bash on Windows). Run the following command:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
#### Replace your_email@example.com with your email. The -t option specifies the type (rsa), and -b sets the key length (4096 bits for strong encryption).

#### You’ll be prompted to:
```bash
Enter a file location: Press Enter to save it in the default location (~/.ssh/id_rsa).
Enter a passphrase (optional): This secures your key with a password.
Once complete, your keys will be saved as:

Private key: ~/.ssh/id_rsa
Public key: ~/.ssh/id_rsa.pub
```
3. Add Your SSH Key to the SSH Agent
Gitbash
Start the SSH agent:

Linux/macOS:
bash
Copy code
eval "$(ssh-agent -s)"
Windows (Git Bash):
bash
Copy code
eval $(ssh-agent -s)
Windows (Command Prompt/PowerShell):
The agent is already running; no action needed.

Add your private key to the SSH agent:

bash
Copy code
ssh-add ~/.ssh/id_rsa
4. Add Your Public Key to Your GitHub Account
Copy the contents of your public key:

bash
Copy code
cat ~/.ssh/id_rsa.pub
On Windows:

cmd
Copy code
type C:\Users\YourUsername\.ssh\id_rsa.pub
Log in to your GitHub account.

Go to Settings > SSH and GPG Keys > New SSH Key.
Paste the copied key and give it a title.
Save the key.
5. Test Your SSH Connection
Run the following command to ensure the connection is working:

bash
Copy code
ssh -T git@github.com
You should see a message like:

bash
Copy code
Hi your-username! You've successfully authenticated, but GitHub does not provide shell access.
6. Set the Correct GitHub Username
If you have multiple GitHub accounts, ensure the correct key is used. Update your SSH config file (~/.ssh/config):

bash
Copy code
# Personal Account
Host github-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/hebballinanda123

# Work Account
Host github-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/nanda.h@test
Test Your SSH Connection
bash
Copy code
$ ssh -T git@github-work
Hi nandahebballi! You've successfully authenticated, but GitHub does not provide shell access.

$ ssh -T git@github-personal
Hi hebballinanda! You've successfully authenticated, but GitHub does not provide shell access.
7. Set the SSH URL for Your Repository
When cloning or pushing, use the SSH URL instead of HTTPS. Example:

Clone a repo:

bash
Copy code
git clone git@github.com:your-username/your-repository.git
Push code:

bash
Copy code
git push origin branch-name
Copy code





