class QRGrid {
    constructor(element, size = 33) {
      this.element = element;
      this.size = size;
      this.grid = [];
  
      this.initGrid();
      this.renderGrid();
      this.addEventListeners();
    }
  
    initGrid() {
      for (let i = 0; i < this.size; i++) {
        this.grid[i] = [];
        for (let j = 0; j < this.size; j++) {
          this.grid[i][j] = false;
        }
      }
    }
  
    renderGrid() {
      const gridHtml = this.grid.map((row, rowIndex) => {
        return row.map((cell, cellIndex) => {
          return `<div class="pip ${cell ? 'clicked' : ''}" data-row="${rowIndex}" data-col="${cellIndex}"></div>`;
        }).join('');
      }).join('');
  
      this.element.innerHTML = gridHtml;
    }
  
    addEventListeners() {
      this.element.addEventListener('click', (event) => {
        if (event.target.classList.contains('pip')) {
          const row = parseInt(event.target.dataset.row);
          const col = parseInt(event.target.dataset.col);
          this.toggleCell(row, col);
        }
      });
    }
  
    toggleCell(row, col) {
      this.grid[row][col] = !this.grid[row][col];
      this.renderGrid();
    }
  
    getQRCode() {
      const qrCode = this.grid.map((row) => {
        return row.map((cell) => cell ? 1 : 0).join('');
      }).join('');
      return qrCode;
    }
  }
  
  const qrGridElement = document.getElementById('qrcode');
  const qrGrid = new QRGrid(qrGridElement);