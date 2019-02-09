

function onSwitchChange() {
    if (this.checked) {
        if (realtime !== null) {
            return;
        }
        realtime = setInterval(function () {
            console.log(1);
            buildLastPrice();
            buildSupply();
            buildBlock();
            displayBlueBox();
        }, 2000);
    }
    else {
        clearInterval(realtime);
        realtime = null;
    }
}

function buildSupply() {
    fetch("https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=UD6AK73BBJ2GFY9PBFG5XXRXGJ3KDUMQ8X")
        .then(response => response.json())
        .then(data => {
            let supplySpan = document.getElementById('supplynum'),
                result = data.result / 1000000000000000000;
            supplySpan.innerHTML = result.toFixed(0);

        })

}