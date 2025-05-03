window.onload = function(){
	window.setInterval(function(){
		var now = new Date();
		var clock = document.getElementById("clock");
	clock.innerHTML = now.toLocaleTimeString();
}, 1000);
};
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
let lektop = document.querySelector('#lektop');
lektop.addEventListener('click', ()=>{
	window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
})
function AlertMsg() {
var zombig = confirm ("You are getting redirected. Click OK to continue.")
if (zombig)
window.location="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

// sumictf{never_give_up}
// Находим элементы на странице
let input = document.getElementById("input-text");
let encryptButton = document.getElementById("encrypt-button");
let decryptButton = document.getElementById("decrypt-button");
let output = document.getElementById("output");

// Добавляем обработчики на кнопки
encryptButton.addEventListener("click", function() {
  let plaintext = input.value;
  let ciphertext = encrypt(plaintext, keymap);
  output.innerText = "Зашифрованное сообщение: " + ciphertext;
});

decryptButton.addEventListener("click", function() {
  let ciphertext = input.value;
  let plaintext = decrypt(ciphertext, reverse_keymap);
  output.innerText = "Дешифрованное сообщение: " + plaintext;
});

// Функция шифрования
function encrypt(plaintext, keymap) {
  let ciphertext = "";
  for (let i = 0; i < plaintext.length; i++) {
    let c = plaintext[i].toUpperCase();
    // Если символ является буквой из словаря, шифруем его
    if (c in keymap) {
      ciphertext += keymap[c] + ".";
    } else if (c === " ") {
      ciphertext += "..";
    }
  }
  // Удаляем последнюю точку, если она есть
  if (ciphertext.endsWith(".")) {
    ciphertext = ciphertext.slice(0, -1);
  }
  return ciphertext;
}

// Функция дешифрования
function decrypt(ciphertext, keymap) {
  let plaintext = "";
  let buffer = "";
  for (let i = 0; i < ciphertext.length; i++) {
    let c = ciphertext[i];
    // Если символ является разделителем, дешифруем буфер и очищаем его
    if (c == "." && ciphertext[i+1] !== "") {
      if (buffer in keymap) {
        plaintext += keymap[buffer];
      } else if (buffer === "") {
        plaintext += " ";
      }
      buffer = "";
    } else {
      buffer += c;
    }
  }
  // Дешифруем последний буфер
  if (buffer in keymap) {
    plaintext += keymap[buffer];
  } else if (buffer === "") {
    plaintext += " ";
  }
  return plaintext;
}

// Создаем словарь для шифрования
let keymap = {
  "Й": "1-1", "Ц": "2-1", "У": "3-1", "К": "4-1", "Е": "5-1", "Н": "6-1",
  "Г": "7-1", "Ш": "8-1", "Щ": "9-1", "З": "10-1", "Х": "11-1", "Ъ": "12-1",
  "Ф": "1-2", "Ы": "2-2", "В": "3-2", "А": "4-2", "П": "5-2", "Р": "6-2",
  "О": "7-2", "Л": "8-2", "Д": "9-2", "Ж": "10-2", "Э": "11-2",
  "Я": "1-3", "Ч": "2-3", "С": "3-3", "М": "4-3", "И": "5-3", "Т": "6-3",
  "Ь": "7-3", "Б": "8-3", "Ю": "9-3", "Ё": "0-0",
  "й": "1-1", "ц": "2-1", "у": "3-1", "к": "4-1", "е": "5-1", "н": "6-1",
  "г": "7-1", "ш": "8-1", "щ": "9-1", "з": "10-1", "х": "11-1", "ъ": "12-1",
  "ф": "1-2", "ы": "2-2", "в": "3-2", "а": "4-2", "п": "5-2", "р": "6-2",
  "о": "7-2", "л": "8-2", "д": "9-2", "ж": "10-2", "э": "11-2",
  "я": "1-3", "ч": "2-3", "с": "3-3", "м": "4-3", "и": "5-3", "т": "6-3",
  "ь": "7-3", "б": "8-3", "ю": "9-3", "ё": "0-0",
};

// Создаем словарь для дешифрования
let reverse_keymap = {};
for (let letter in keymap) {
  let code = keymap[letter];
  reverse_keymap[code] = letter;
}
