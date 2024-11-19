/**Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно*/
const container = document.getElementById('table-container');
const table = document.createElement('table');

for (let i = 0; i <= 10; i++) {
  const row = document.createElement('tr');
  for (let j = 0; j <= 10; j++) {
    const cell = document.createElement(i === 0 || j === 0 ? 'th' : 'td');
    cell.textContent = i && j ? i * j : i || j;
    row.appendChild(cell);
  }
  table.appendChild(row);
}
container.appendChild(table);