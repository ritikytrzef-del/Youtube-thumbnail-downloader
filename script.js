async function requestWithdraw() {
    const address = document.getElementById('address').value;
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    const statusDiv = document.getElementById('status');

    if (!address || !amount) {
        statusDiv.innerText = "⚠️ Please fill all fields";
        statusDiv.style.color = "#fbbf24";
        return;
    }

    statusDiv.innerText = "⏳ Processing...";
    statusDiv.style.color = "#38bdf8";

    // APNA VERCEL URL YAHAN DALEIN
    const API_URL = "https://youtube-thumbnail-downloader-self.vercel.app/api/withdraw";

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ address, amount, currency })
        });

        const result = await response.json();

        if (result.status === 200) {
            statusDiv.innerText = "✅ Success: " + result.message;
            statusDiv.style.color = "#4ade80";
        } else {
            statusDiv.innerText = "❌ Error: " + (result.message || "Failed");
            statusDiv.style.color = "#f87171";
        }
    } catch (error) {
        statusDiv.innerText = "❌ Connection Error";
        statusDiv.style.color = "#f87171";
    }
}

