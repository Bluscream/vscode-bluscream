# Bluscream's VS Code Extensions

A collection of productivity-enhancing VS Code/Cursor extensions by Bluscream.

## ✨ Features

### 📋 Copy Relative Path (new)

Enhanced relative path copying with consistent formatting:

- **Dot Prefix** - All relative paths start with a dot (e.g., `./src/file.ts`)
- **Trailing Slashes** - Folder paths always end with a slash (e.g., `./src/folder/`)
- **Multiple Selection** - Select multiple files/folders and copy all paths at once
- **Cross-platform** - Works on Windows, macOS, and Linux

### 🪟 Open in New Window

Quickly open files or folders in a new VS Code/Cursor window:

- **Single Click** - Right-click any file or folder to open in a new window
- **Multiple Selection** - Select multiple items and open each in separate windows
- **Context Aware** - Works in Explorer context menu

## 🚀 Usage

### Copy Relative Path

1. Right-click on a file or folder in the VS Code Explorer
2. Select **"Copy Relative Path (new)"** from the context menu
3. The path is copied to your clipboard in the format:
   - Files: `./path/to/file.ext`
   - Folders: `./path/to/folder/`

**Examples:**
- File in root: `./package.json`
- File in subfolder: `./src/extension.ts`
- Folder in root: `./src/`
- Nested folder: `./src/utils/`

### Open in New Window

1. Right-click on a file or folder in the VS Code Explorer
2. Select **"Open in New Window"** from the context menu
3. The folder opens in a new VS Code/Cursor window

## 📦 Installation

### From Release

1. Download the latest `.vsix` file from [Releases](https://github.com/Bluscream/vscode-bluscream/releases)
2. Install using:
   ```bash
   code --install-extension vscode-bluscream-1.1.0.vsix
   ```

### From Source

```bash
git clone https://github.com/Bluscream/vscode-bluscream.git
cd vscode-bluscream
npm install
npm run compile
vsce package
code --install-extension vscode-bluscream-1.1.0.vsix
```

## ⚙️ Requirements

No additional requirements or dependencies needed.

## 🔧 Extension Settings

This extension does not contribute any settings at this time.

## 🐛 Known Issues

None at this time. Please report any issues on [GitHub](https://github.com/Bluscream/vscode-bluscream/issues).

## 📝 Release Notes

### 1.1.0 (Latest)

- ✨ Added **"Open in New Window"** feature
- 🎯 Opens files/folders in new VS Code/Cursor windows
- 🔄 Supports multiple selection
- 📦 Repackaged with improved code structure

### 1.0.0

- 🎉 Initial release
- 📋 Copy Relative Path with dot prefix and trailing slashes
- 🎯 Multiple selection support
- 🌍 Cross-platform compatibility

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👤 Author

**Bluscream**
- GitHub: [@Bluscream](https://github.com/Bluscream)
- Repository: [vscode-bluscream](https://github.com/Bluscream/vscode-bluscream)

## 🙏 Acknowledgments

- Built with assistance from CursorAI
- Inspired by the need for better path formatting in VS Code

---

**Enjoy!** If you find this extension useful, please consider giving it a ⭐ on [GitHub](https://github.com/Bluscream/vscode-bluscream)!

