# Publishing Instructions

## Extension has been packaged successfully! ✓

The extension has been:

- ✅ Created with full functionality
- ✅ Compiled and packaged as `vscode-bluscream-1.0.0.vsix`
- ✅ Committed to git on the `ai` branch
- ✅ Published to GitHub at https://github.com/Bluscream/vscode-bluscream

## To publish to VS Code Marketplace:

You need to set up a Personal Access Token (PAT) from Azure DevOps:

### Step 1: Create a Personal Access Token

1. Go to https://dev.azure.com
2. Sign in with your Microsoft account
3. Click on your profile picture (top right) → Security
4. Under "Personal Access Tokens", click "+ New Token"
5. Configure the token:
   - **Name**: `vsce-publish` (or any name you prefer)
   - **Organization**: All accessible organizations
   - **Expiration**: Choose your preferred duration
   - **Scopes**: Custom defined → Click "Show all scopes"
   - **Marketplace**: Check "Manage" (this includes Acquire, Publish)
6. Click "Create"
7. **IMPORTANT**: Copy the token immediately (it won't be shown again)

### Step 2: Create Publisher (if you haven't already)

1. Go to https://marketplace.visualstudio.com/manage/publishers/
2. Click "Create publisher"
3. Use `Bluscream` as the publisher ID (or update package.json if different)
4. Fill in the required details

### Step 3: Publish the Extension

Run one of these commands:

**Option 1: Publish with token inline**

```powershell
cd "P:\Visual Studio Code\vscode-bluscream"
vsce publish -p YOUR_PERSONAL_ACCESS_TOKEN
```

**Option 2: Login first, then publish**

```powershell
cd "P:\Visual Studio Code\vscode-bluscream"
vsce login Bluscream
# Enter your PAT when prompted
vsce publish
```

## Alternative: Install Locally

You can install the extension locally without publishing:

```powershell
code --install-extension vscode-bluscream-1.0.0.vsix
```

## GitHub Release (Optional)

To create a GitHub release with the .vsix file:

```powershell
cd "P:\Visual Studio Code\vscode-bluscream"
gh release create v1.0.2 vscode-bluscream-1.0.0.vsix --title "Bluscream's VS Code Extensions v1.0.0" --notes "Initial release

Features:
- Copy relative paths with dot prefix
- Automatic trailing slash for folders
- Multi-selection support
- Cross-platform compatibility"
```

## Files Created

- `vscode-bluscream-1.0.0.vsix` - The packaged extension
- All source files committed to git
- GitHub repository created and pushed at https://github.com/Bluscream/vscode-bluscream
