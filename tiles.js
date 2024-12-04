document.getElementById("tileCalculatorForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get the input values
    const areaLength = parseFloat(document.getElementById("areaLength").value);
    const areaWidth = parseFloat(document.getElementById("areaWidth").value);
    const tileLength = parseFloat(document.getElementById("tileLength").value);
    const tileWidth = parseFloat(document.getElementById("tileWidth").value);
    const wasteFactor = parseFloat(document.getElementById("wasteFactor").value) / 100;
  
    // Calculate the area of the space and the tile
    const areaSize = areaLength * areaWidth; // area in square feet
    const tileSize = (tileLength / 12) * (tileWidth / 12); // tile area in square feet (convert inches to feet)
  
    // Calculate the number of tiles needed (without waste)
    let tileCount = areaSize / tileSize;
  
    // Adjust for waste factor
    tileCount += tileCount * wasteFactor;
  
    // Round up the result (you can't buy a fraction of a tile)
    tileCount = Math.ceil(tileCount);
  
    // Display the results
    document.getElementById("tileCount").textContent = tileCount;
    document.getElementById("totalArea").textContent = (tileCount * tileSize).toFixed(2);
  });
  