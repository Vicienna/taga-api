// api/index.js
module.exports = (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Spacepixel API Docs</title>
        <style>
            body { font-family: 'Courier New', Courier, monospace; background: #0d1117; color: #c9d1d9; padding: 20px; line-height: 1.6; }
            h1 { color: #58a6ff; border-bottom: 2px solid #30363d; padding-bottom: 10px; }
            .endpoint { background: #161b22; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 5px solid #238636; }
            code { background: #30363d; padding: 2px 5px; border-radius: 4px; color: #ffa657; }
            .method { font-weight: bold; color: #7ee787; }
            .tag { font-size: 0.8em; background: #21262d; padding: 3px 8px; border-radius: 10px; }
        </style>
    </head>
    <body>
        <h1>🚀 Spacepixel API Documentation</h1>
        <p>Base URL: <code>https://${req.headers.host}</code></p>

        <div class="endpoint">
            <span class="method">GET | POST</span> <code>/api/thrusters</code>
            <p>Kelola data mesin pendorong. Field: <i>name, price, speedLevel, desc, fuelUsage, illustration</i></p>
        </div>

        <div class="endpoint">
            <span class="method">GET | POST</span> <code>/api/shields</code>
            <p>Kelola data pelindung. Field: <i>name, price, resilience, desc, illustration</i></p>
        </div>

        <div class="endpoint">
            <span class="method">GET | POST</span> <code>/api/tanks</code>
            <p>Kelola data tangki bahan bakar. Field: <i>name, price, capacity, desc, illustration</i></p>
        </div>

        <div class="endpoint">
            <span class="method">GET | POST</span> <code>/api/planets</code>
            <p>Kelola data planet. Field: <i>name, distance, asteroidLevel, desc, illustration</i></p>
        </div>

        <div class="endpoint" style="border-left-color: #d29922;">
            <span class="method">GET | PUT | DELETE</span> <code>/api/[resource]/[id]</code>
            <p>Operasi spesifik menggunakan ID unik item.</p>
        </div>

        <footer style="margin-top: 50px; font-size: 0.8em; color: #8b949e;">
            Spacepixel Engine v1.0 - Powered by Vercel & MongoDB
        </footer>
    </body>
    </html>
  `);
};
