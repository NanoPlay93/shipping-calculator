function calculateShipping() {
    let weight = document.getElementById("weight").value;
    let cost = weight * 5;

    document.getElementById("result").innerText =
        "Estimated Shipping Cost: $" + cost;
}