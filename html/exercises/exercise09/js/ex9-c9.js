/**********
Author      : Christopher Diefenthaler
Class       : CITW 165
Exercise    : Exercise # 9
Abstract    : 
**********/
document.getElementById('saveLocal').addEventListener('click', function() {
  const key = document.getElementById('keyInput').value;
  const value = document.getElementById('dataInput').value;
  if (key && value) {
    localStorage.setItem(key, value);
    document.getElementById('output').textContent = `Saved to LocalStorage: ${key} = ${value}`;
    updateTable('localStorage');
  } else {
    document.getElementById('output').textContent = 'Please enter both key and value.';
  }
});

document.getElementById('saveSession').addEventListener('click', function() {
  const key = document.getElementById('keyInput').value;
  const value = document.getElementById('dataInput').value;
  if (key && value) {
    sessionStorage.setItem(key, value);
    document.getElementById('output').textContent = `Saved to SessionStorage: ${key} = ${value}`;
    updateTable('sessionStorage');
  } else {
    document.getElementById('output').textContent = 'Please enter both key and value.';
  }
});

document.getElementById('retrieveLocal').addEventListener('click', function() {
  const key = document.getElementById('keyInput').value;
  if (key) {
    const value = localStorage.getItem(key);
    document.getElementById('output').textContent = value ? `Retrieved from LocalStorage: ${key} = ${value}` : 'No data found for the given key in LocalStorage.';
  } else {
    document.getElementById('output').textContent = 'Please enter a key.';
  }
});

document.getElementById('retrieveSession').addEventListener('click', function() {
  const key = document.getElementById('keyInput').value;
  if (key) {
    const value = sessionStorage.getItem(key);
    document.getElementById('output').textContent = value ? `Retrieved from SessionStorage: ${key} = ${value}` : 'No data found for the given key in SessionStorage.';
  } else {
    document.getElementById('output').textContent = 'Please enter a key.';
  }
});

function updateTable(storageType) {
  const tableBody = document.getElementById(`${storageType}Table`).getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';
  const storage = storageType === 'localStorage' ? localStorage : sessionStorage;
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    const value = storage.getItem(key);
    const row = tableBody.insertRow();
    const cellKey = row.insertCell(0);
    const cellValue = row.insertCell(1);
    cellKey.textContent = key;
    cellValue.textContent = value;
  }
}

// Initial table update
updateTable('localStorage');
updateTable('sessionStorage');
