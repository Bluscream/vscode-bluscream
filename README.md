# Copy Relative Path Enhanced

A Visual Studio Code extension that enhances the default "Copy Relative Path" functionality with consistent formatting.

## Features

- **Copy Relative Path** - Right-click on any file or folder in the Explorer and select "Copy Relative Path"
- **Dot Prefix** - All relative paths start with a dot (e.g., `./src/file.ts`)
- **Trailing Slashes** - Folder paths always end with a slash (e.g., `./src/folder/`)
- **Multiple Selection Support** - Select multiple files/folders and copy all paths at once
- **Cross-platform** - Works on Windows, macOS, and Linux

## Usage

1. Right-click on a file or folder in the VS Code Explorer
2. Select "Copy Relative Path" from the context menu
3. The path is copied to your clipboard in the format:
   - Files: `./path/to/file.ext`
   - Folders: `./path/to/folder/`

## Examples

- File in root: `./package.json`
- File in subfolder: `./src/extension.ts`
- Folder in root: `./src/`
- Nested folder: `./src/utils/`

## Requirements

No additional requirements or dependencies.

## Extension Settings

This extension does not contribute any settings.

## Known Issues

None at this time.

## Release Notes

### 1.0.0

Initial release of Copy Relative Path Enhanced.

## License

MIT

