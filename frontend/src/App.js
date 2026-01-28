import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">StyleText</h1>
        <p className="text-xl text-slate-300 mb-8">Your text styling application is ready!</p>
        <div className="bg-slate-700 rounded-lg p-6 max-w-md">
          <h2 className="text-2xl font-semibold text-white mb-4">API Status</h2>
          <p className="text-slate-300 mb-4">Backend running at: <code className="bg-slate-900 px-2 py-1 rounded">http://localhost:8000</code></p>
          <div className="space-y-2 text-left">
            <p className="text-sm text-slate-300">✓ API: /api/</p>
            <p className="text-sm text-slate-300">✓ Status POST: /api/status</p>
            <p className="text-sm text-slate-300">✓ Status GET: /api/status</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
