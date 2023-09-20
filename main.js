document.addEventListener("DOMContentLoaded", function () {
    const clickButton = document.getElementById("click-button");
    const scoreDisplay = document.getElementById("score");
    const buyObserver = document.getElementById("buy-observer");
    const observerSpan = document.getElementById("observer-span");
    const buySatellite = document.getElementById("buy-satellite");
    const satelliteSpan = document.getElementById("satellite-span");
    const buyBase = document.getElementById("buy-base");
    const baseSpan = document.getElementById("base-span");
    const buyColony = document.getElementById("buy-colony");
    const colonySpan = document.getElementById("colony-span");
    const powerSpan = document.getElementById("power-span");
    const incomeSpan = document.getElementById("income-span");
    const upgradePlanet = document.getElementById("upgrade-planet");
    const planetSpan = document.getElementById("planet-span");
    const planetName = document.getElementById("planet-name")
    const upgradedImage1 = "img/planet2.gif";
    const upgradedImage2 = "img/planet3.gif";
    const clickFloat = document.getElementById("click-float");

    let power = 1;
    let income = 0;
    let score = 0;
    let observerCost = 20;
    let satelliteCost = 200;
    let baseCost = 40;
    let colonyCost = 400;
    let multiplier = 1;
    let planetCost = 4000;
    let upgrades = 0

    clickButton.addEventListener("click", function () {
        score += power;
        scoreDisplay.textContent = score;
        
        const floatingNumber = clickFloat.cloneNode(true);
        floatingNumber.style.display = "block";

        const buttonRect = clickButton.getBoundingClientRect();       
        const centerX = buttonRect.left + buttonRect.width / 2;
        const centerY = buttonRect.top + buttonRect.height / 2;

        const randomOffsetX = Math.random() * 40 - 42;
        floatingNumber.style.left = centerX - floatingNumber.offsetWidth / 2 + randomOffsetX + "px";
        floatingNumber.style.top = centerY - floatingNumber.offsetHeight / 2 + "px";
        floatingNumber.style.pointerEvents = "none";
        floatingNumber.textContent = "+" + power;
        document.body.appendChild(floatingNumber);
        floatingNumber.addEventListener("animationend", function () {
            floatingNumber.remove();
        });
    });

    buyObserver.addEventListener("click", function () {
        if (score >= observerCost) {
            score -= observerCost;
            scoreDisplay.textContent = score;
            power += 1 * multiplier;
            observerCost *= 1.5;
            observerCost = Math.ceil(observerCost);
            observerSpan.textContent = observerCost;
            powerSpan.textContent = power;
        }
    });

    buySatellite.addEventListener("click", function () {
        if (score >= satelliteCost) {
            score -= satelliteCost;
            scoreDisplay.textContent = score;
            power += 10 * multiplier;
            satelliteCost *= 1.5;
            satelliteCost = Math.ceil(satelliteCost);
            satelliteSpan.textContent = satelliteCost;
            powerSpan.textContent = power;
        }
    });

    buyBase.addEventListener("click", function () {
        if (score >= baseCost) {
            score -= baseCost;
            scoreDisplay.textContent = score;
            income += 1 * multiplier;
            baseCost *= 1.5;
            baseCost = Math.ceil(baseCost);
            baseSpan.textContent = baseCost;
            incomeSpan.textContent = income;
        }
    });

    buyColony.addEventListener("click", function () {
        if (score >= colonyCost) {
            score -= colonyCost;
            scoreDisplay.textContent = score;
            income += 10 * multiplier;
            colonyCost *= 1.5;
            colonyCost = Math.ceil(colonyCost);
            colonySpan.textContent = colonyCost;
            incomeSpan.textContent = income;
        }
    });

    upgradePlanet.addEventListener("click", function () {
        if (score >= planetCost) {
            score -= planetCost;
            scoreDisplay.textContent = score;
            power *= 2;
            income *= 2;
            multiplier += 1;
            planetCost *= 4;
            planetSpan.textContent = planetCost;
            powerSpan.textContent = power;
            incomeSpan.textContent = income;
            upgrades += 1
            if (upgrades === 1) {
                planetName.textContent = "Ice Planet"
                clickButton.setAttribute("src", upgradedImage1);
            }
            if (upgrades === 2) {
                planetName.textContent = "Exoplanet"
                clickButton.setAttribute("src", upgradedImage2);
            }
            if (upgrades === 3) {
                document.querySelector(".game-container").style.display = "none";
                document.getElementById("ending-screen").style.display = "block";
            }
        }
    });

    function updateScoreWithIncome() {
        score += income;
        scoreDisplay.textContent = score;
    }

    setInterval(updateScoreWithIncome, 1000);
});
