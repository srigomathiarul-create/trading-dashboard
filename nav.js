function renderNavbar() {
    const navHTML = `
    <nav class="bg-gray-800 border-b border-gray-700 px-6 py-4 flex flex-wrap justify-between items-center text-white">
        <a href="index.html" class="font-bold text-xl text-blue-400">TradeCalc Hub</a>
        <div class="flex space-x-6 text-sm font-medium">
            <a href="index.html" class="hover:text-blue-400">NSE Stocks</a>
            <a href="commodity.html" class="hover:text-amber-400">Commodity</a>
            <a href="forex.html" class="hover:text-purple-400">Forex</a>
            <a href="3veera.html" class="hover:text-emerald-400 text-emerald-400 font-semibold">Net Division SL</a>
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
