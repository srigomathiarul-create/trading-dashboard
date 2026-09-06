document.addEventListener("DOMContentLoaded", function () {
    const navHTML = `
    <nav class="bg-gray-800 border-b border-gray-700 px-6 py-4 flex justify-between items-center text-white">
        <div class="font-bold text-xl text-blue-400">TradeCalc Hub</div>
        <div class="flex space-x-6 text-sm font-medium">
            <a href="index.html" class="hover:text-blue-400">Live Markets</a>
            <a href="position-size.html" class="hover:text-blue-400">Position Size</a>
            <a href="brokerage.html" class="hover:text-blue-400">Brokerage</a>
        </div>
    </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navHTML);
});
