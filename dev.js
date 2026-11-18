const { spawn } = require('child_process');
const path = require('path');

console.log('===========================================================');
console.log('   🌴 JACK RIDER - TOURS & TRAVELS (KERALA SPECIALIST)   ');
console.log('===========================================================');
console.log(' Starting:');
console.log(' • [Backend API]  -> http://localhost:5001');
console.log(' • [Frontend UI]  -> http://localhost:3000');
console.log(' • [Admin Panel]  -> http://localhost:3001');
console.log('===========================================================\n');

function runService(name, dir, command, args, color) {
  const proc = spawn(command, args, {
    cwd: path.join(__dirname, dir),
    shell: true,
    stdio: 'inherit'
  });

  proc.on('close', (code) => {
    console.log(`[${name}] process exited with code ${code}`);
  });

  return proc;
}

// 1. Backend Server
runService('Backend', 'backend', 'node', ['server.js']);

// 2. Admin Vite Dashboard
runService('Admin', 'admin', 'npm', ['run', 'dev']);

// 3. Frontend Next.js
runService('Frontend', 'frontend', 'npm', ['run', 'dev']);
