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
	var zombig = confirm("You are getting redirected. Click OK to continue.");
	if (zombig)
		window.location="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

// sumictf{y0u_f0und_a_d3c0y}
let input = document.getElementById("input-text");
let encryptButton = document.getElementById("encrypt-button");
let decryptButton = document.getElementById("decrypt-button");
let output = document.getElementById("output");

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

function encrypt(plaintext, keymap) {
	let ciphertext = "";
	for (let i = 0; i < plaintext.length; i++) {
		let c = plaintext[i].toUpperCase();
		if (c in keymap) {
			ciphertext += keymap[c] + ".";
		} else if (c === " ") {
			ciphertext += "..";
		}
	}
	// Добавляем точку в конце
	ciphertext += ".";
	return ciphertext;
}

function decrypt(ciphertext, keymap) {
	let plaintext = "";
	let buffer = "";
	for (let i = 0; i < ciphertext.length; i++) {
		let c = ciphertext[i];
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
	if (buffer in keymap) {
		plaintext += keymap[buffer];
	} else if (buffer === "") {
		plaintext += " ";
	}
	return plaintext;
}

// Английская раскладка
let keymap = {
  "Q": "1-1", "W": "2-1", "E": "3-1", "R": "4-1", "T": "5-1", "Y": "6-1",
  "U": "7-1", "I": "8-1", "O": "9-1", "P": "10-1", "[": "11-1", "]": "12-1",
  "A": "1-2", "S": "2-2", "D": "3-2", "F": "4-2", "G": "5-2", "H": "6-2",
  "J": "7-2", "K": "8-2", "L": "9-2", ";": "10-2", "'": "11-2",
  "Z": "1-3", "X": "2-3", "C": "3-3", "V": "4-3", "B": "5-3", "N": "6-3",
  "M": "7-3", ",": "8-3", ".": "9-3", "`": "0-0",
  "q": "1-1", "w": "2-1", "e": "3-1", "r": "4-1", "t": "5-1", "y": "6-1",
  "u": "7-1", "i": "8-1", "o": "9-1", "p": "10-1", "[": "11-1", "]": "12-1",
  "a": "1-2", "s": "2-2", "d": "3-2", "f": "4-2", "g": "5-2", "h": "6-2",
  "j": "7-2", "k": "8-2", "l": "9-2", ";": "10-2", "'": "11-2",
  "z": "1-3", "x": "2-3", "c": "3-3", "v": "4-3", "b": "5-3", "n": "6-3",
  "m": "7-3", ",": "8-3", ".": "9-3", "`": "0-0",
};

let reverse_keymap = {};
for (let letter in keymap) {
	let code = keymap[letter];
	reverse_keymap[code] = letter;
}
