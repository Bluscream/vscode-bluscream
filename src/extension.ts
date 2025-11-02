import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    console.log('Bluscream VS Code Extensions is now active');

    // Copy Relative Path command
    let copyRelativePathDisposable = vscode.commands.registerCommand(
        'bluscream.copyRelativePath',
        async (uri: vscode.Uri, uris: vscode.Uri[]) => {
            try {
                // Handle multiple selections
                const targetUris = uris && uris.length > 0 ? uris : [uri];
                
                if (!targetUris || targetUris.length === 0) {
                    vscode.window.showErrorMessage('No file or folder selected');
                    return;
                }

                // Get workspace folder
                const workspaceFolder = vscode.workspace.getWorkspaceFolder(targetUris[0]);
                if (!workspaceFolder) {
                    vscode.window.showErrorMessage('File is not in a workspace');
                    return;
                }

                // Process all selected items
                const relativePaths = targetUris.map(targetUri => {
                    // Get relative path from workspace root
                    let relativePath = path.relative(workspaceFolder.uri.fsPath, targetUri.fsPath);
                    
                    // Convert backslashes to forward slashes (Windows compatibility)
                    relativePath = relativePath.replace(/\\/g, '/');
                    
                    // Add dot prefix if not already present
                    if (!relativePath.startsWith('.')) {
                        relativePath = './' + relativePath;
                    }
                    
                    // Check if it's a directory and add trailing slash
                    const stats = fs.statSync(targetUri.fsPath);
                    if (stats.isDirectory() && !relativePath.endsWith('/')) {
                        relativePath += '/';
                    }
                    
                    return relativePath;
                });

                // Join multiple paths with newlines
                const result = relativePaths.join('\n');

                // Copy to clipboard
                await vscode.env.clipboard.writeText(result);

                // Show success message
                const message = relativePaths.length === 1
                    ? `Copied: ${result}`
                    : `Copied ${relativePaths.length} paths`;
                vscode.window.showInformationMessage(message);

            } catch (error) {
                vscode.window.showErrorMessage(`Error copying path: ${error}`);
            }
        }
    );
    context.subscriptions.push(copyRelativePathDisposable);

    // Open in New Window command
    let openInNewWindowDisposable = vscode.commands.registerCommand(
        'bluscream.openInNewWindow',
        async (uri: vscode.Uri, uris: vscode.Uri[]) => {
            try {
                // Handle multiple selections - open each in a new window
                const targetUris = uris && uris.length > 0 ? uris : [uri];
                
                if (!targetUris || targetUris.length === 0) {
                    vscode.window.showErrorMessage('No file or folder selected');
                    return;
                }

                for (const targetUri of targetUris) {
                    const stats = fs.statSync(targetUri.fsPath);
                    
                    if (stats.isDirectory()) {
                        // Open folder in new window
                        await vscode.commands.executeCommand('vscode.openFolder', targetUri, true);
                    } else {
                        // Open file in new window
                        await vscode.commands.executeCommand('vscode.openFolder', vscode.Uri.file(path.dirname(targetUri.fsPath)), true);
                        // Note: Opening a specific file in a new window requires opening its parent folder
                        // The file will need to be opened manually after the window opens
                    }
                }

                const message = targetUris.length === 1
                    ? `Opening in new window...`
                    : `Opening ${targetUris.length} items in new windows...`;
                vscode.window.showInformationMessage(message);

            } catch (error) {
                vscode.window.showErrorMessage(`Error opening in new window: ${error}`);
            }
        }
    );

    context.subscriptions.push(openInNewWindowDisposable);
}

export function deactivate() {}
