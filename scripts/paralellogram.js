function calculateParallelogramArea(){
    // get base of the parallelogram
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value;
    const base = parseFloat(baseText);
    console.log(base);

    // get height of the parallelogram
    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value;
    const height = parseFloat(heightText);
    console.log(height);

    // calculate parallelogram area
    const area = base * height;
    console.log('area of the parallelogram:', area);

    // display parallelogram area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
}