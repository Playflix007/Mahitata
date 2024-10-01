export default function handler(req, res) {
    const https = require('https');

    const url = 'https://babel-in.xyz/tata/channels';

    const data = JSON.stringify({
        'X-API-Key': 'babel-23003cca3ba04020bade44a193'
    });

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Babel/5.0'
        }
    };

    const apiReq = https.request(url, options, (apiRes) => {
        let responseData = '';

        apiRes.on('data', (chunk) => {
            responseData += chunk;
        });

        apiRes.on('end', () => {
            res.status(200).json(JSON.parse(responseData));
        });
    });

    apiReq.on('error', (e) => {
        res.status(500).json({ error: `Error sending request: ${e.message}` });
    });

    apiReq.write(data);
    apiReq.end();
}
