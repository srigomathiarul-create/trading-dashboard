function renderNavbar() {
    const navHTML = `
    <nav class="bg-gray-800 border-b border-gray-700 px-6 py-4 flex flex-wrap justify-between items-center text-white">
        <a href="index.html" class="font-bold text-xl text-blue-400">TradeCalc Hub</a>
        <div class="flex space-x-4 text-sm font-medium">
            <a href="index.html" class="hover:text-blue-400">NSE Stocks</a>
            <a href="commodity.html" class="hover:text-blue-400">Commodity</a>
            <a href="forex.html" class="hover:text-blue-400">Forex</a>
            <a href="position-size.html" class="hover:text-green-400 text-green-400 font-semibold">Position Size Calc</a>
            <a href="brokerage.html" class="hover:text-yellow-400 text-yellow-400 font-semibold">Brokerage Calc</a>
        </div>
    </nav>
    `;
    
    const container = document.getElementById('navbar');
    if (container) {
        container.innerHTML = navHTML;
    } else {
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderNavbar);
} else {
    renderNavbar();
}
