import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import os from 'os'
import { execSync } from 'child_process'

function getTailscaleIP() {
  // 1. Check network interfaces
  const ifaces = os.networkInterfaces()
  for (const [name, addrs] of Object.entries(ifaces)) {
    if (!addrs) continue
    for (const addr of addrs) {
      if (addr.family === 'IPv4' && !addr.internal) {
        if (
          name.toLowerCase().includes('tailscale') ||
          (addr.address.startsWith('100.') &&
            parseInt(addr.address.split('.')[1], 10) >= 64 &&
            parseInt(addr.address.split('.')[1], 10) <= 127)
        ) {
          return addr.address
        }
      }
    }
  }

  // 2. Fallback to tailscale CLI if available
  try {
    const ip = execSync('tailscale ip -4', {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim()
    if (ip) return ip
  } catch {
    // Ignore if CLI is not in PATH
  }

  return null
}

function tailscalePlugin() {
  return {
    name: 'vite-plugin-tailscale',
    configureServer(server) {
      const originalPrintUrls = server.printUrls
      server.printUrls = () => {
        originalPrintUrls()
        const tailscaleIP = getTailscaleIP()
        if (tailscaleIP) {
          const port = server.config.server.port || 5173
          console.log(
            `  \x1b[32m➜\x1b[0m  \x1b[1mTailscale\x1b[0m: \x1b[36mhttp://${tailscaleIP}:${port}/\x1b[0m \x1b[90m(Permanent Global Access)\x1b[0m\n`
          )
        } else {
          console.log(
            `  \x1b[33m➜\x1b[0m  \x1b[90mTailscale: Not detected on this machine. (Install from https://tailscale.com for global access)\x1b[0m\n`
          )
        }
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tailscalePlugin(),
  ],
  server: {
    host: true, // Listen on all network interfaces (LAN + Tailscale)
    allowedHosts: true, // Allow external / Tailscale hostnames
  },
})
