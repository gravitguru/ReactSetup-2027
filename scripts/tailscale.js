import { execSync } from 'child_process'
import os from 'os'

console.log('\n========================================================')
console.log('   🔍 Tailscale Cross-Platform Auto-Detector')
console.log('========================================================\n')

const platform = os.platform()

function checkCommand(cmd) {
  try {
    execSync(cmd, { stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

// Check if Tailscale is installed
const isInstalled =
  checkCommand('tailscale version') ||
  (platform === 'win32' && checkCommand('"C:\\Program Files\\Tailscale\\tailscale.exe" version'))

if (!isInstalled) {
  console.log('❌ Tailscale is NOT installed on this machine.\n')
  console.log('👉 Quick Install Command for this system:')

  if (platform === 'win32') {
    console.log('   winget install --id Tailscale.Tailscale -e\n')
  } else if (platform === 'darwin') {
    console.log('   brew install --cask tailscale\n')
  } else {
    console.log('   curl -fsSL https://tailscale.com/install.sh | sh\n')
  }

  console.log('Or download manually at: https://tailscale.com/download\n')
  process.exit(0)
}

console.log('✅ Tailscale is installed on this machine!\n')

// Check status & IP
try {
  let ip = ''
  try {
    ip = execSync('tailscale ip -4', { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'ignore'] }).trim()
  } catch {
    if (platform === 'win32') {
      ip = execSync('"C:\\Program Files\\Tailscale\\tailscale.exe" ip -4', {
        encoding: 'utf-8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim()
    }
  }

  if (ip) {
    console.log(`🌐 Permanent Tailscale IP: \x1b[36m${ip}\x1b[0m`)
    console.log(`🚀 Your project will be accessible at: \x1b[32mhttp://${ip}:5173/\x1b[0m\n`)
  } else {
    console.log('⚠️  Tailscale is installed but logged out or stopped.')
    console.log('👉 Run this command to log in: tailscale login\n')
  }
} catch (err) {
  console.log('⚠️  Tailscale service may need to be started.\n')
}

