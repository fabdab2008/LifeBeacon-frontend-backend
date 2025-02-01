// openUrls.js
import open from 'open';

const frontendUrl = 'http://localhost:5173';
const backendUrl = 'http://localhost:5000';

(async () => {
    console.log('Opening frontend and backend in the browser...');
    await open(frontendUrl); // Opens frontend
    await open(backendUrl); // Opens backend
})();
