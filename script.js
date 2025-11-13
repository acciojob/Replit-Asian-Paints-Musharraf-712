    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');
    const blockInput = document.getElementById('block_id');
    const colorInput = document.getElementById('colour_id');
    const gridItems = document.querySelectorAll('.grid-item');

    function resetGrid() {
      gridItems.forEach(item => item.style.backgroundColor = 'transparent');
    }

    changeButton.addEventListener('click', () => {
      const blockId = blockInput.value;
      const color = colorInput.value;
      resetGrid();
      const block = document.getElementById(blockId);
      if (block && color) {
        block.style.backgroundColor = color;
      }
    });

    resetButton.addEventListener('click', resetGrid);