# Fast Refresh Troubleshooting Guide

## Issue: Fast Refresh Not Working

If you need to manually restart the dev server to see changes, follow these steps:

### Quick Fixes

1. **Clear Next.js Cache**
   ```bash
   pnpm dev:clean
   ```

2. **Full Reset (if above doesn't work)**
   ```bash
   pnpm dev:reset
   ```

3. **Manual Cache Clear**
   ```bash
   rm -rf .next
   rm -rf node_modules/.cache
   pnpm dev
   ```

### Common Causes & Solutions

#### 1. **Component Export Issues**
Make sure your components are properly exported:

```tsx
// ✅ Good
export default function MyComponent() {
  return <div>Hello</div>
}

// ❌ Bad - can cause Fast Refresh issues
const MyComponent = () => {
  return <div>Hello</div>
}
export default MyComponent
```

#### 2. **Hook Usage Issues**
Ensure hooks are at the top level:

```tsx
// ✅ Good
function MyComponent() {
  const [state, setState] = useState()
  // ... rest of component
}

// ❌ Bad - hooks inside conditions
function MyComponent() {
  if (condition) {
    const [state, setState] = useState() // This breaks Fast Refresh
  }
}
```

#### 3. **File Structure Issues**
- Avoid changing file names frequently
- Keep component files in consistent locations
- Don't move files while dev server is running

#### 4. **Import/Export Issues**
```tsx
// ✅ Good - named exports
export { MyComponent }
export default MyComponent

// ❌ Bad - mixing default and named exports
export default MyComponent
export { MyComponent } // This can cause issues
```

### Advanced Troubleshooting

#### 1. **Check Browser Console**
Look for Fast Refresh errors in the browser console.

#### 2. **Check Terminal Output**
Look for compilation errors or warnings.

#### 3. **Disable Extensions**
Some browser extensions can interfere with Fast Refresh.

#### 4. **Check File Watchers**
On Linux/WSL, you might need to increase file watchers:
```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

### Configuration Fixes Applied

The following changes have been made to improve Fast Refresh:

1. **Next.js Config Updates**:
   - Added `fastRefresh: true`
   - Added `reactStrictMode: true`
   - Added `swcMinify: true`
   - Improved webpack configuration for development

2. **New Scripts**:
   - `pnpm dev:clean` - Clears cache and restarts
   - `pnpm dev:reset` - Full reset with reinstall

### Best Practices

1. **Use the new scripts**:
   ```bash
   pnpm dev:clean  # For cache issues
   pnpm dev:reset  # For persistent issues
   ```

2. **Check component structure**:
   - Use default exports for pages
   - Keep hooks at top level
   - Avoid conditional hook calls

3. **File organization**:
   - Keep components in consistent locations
   - Use clear, descriptive file names
   - Avoid frequent file moves during development

### When to Restart

You should restart the dev server when:
- Changing Next.js configuration
- Adding new dependencies
- Moving files between directories
- Experiencing persistent Fast Refresh failures

### Monitoring Fast Refresh

Look for these indicators that Fast Refresh is working:
- Changes appear immediately in browser
- No full page reloads for component changes
- Console shows "Fast Refresh" messages
- State is preserved between changes

If you continue to have issues, try the `pnpm dev:reset` command for a complete fresh start. 