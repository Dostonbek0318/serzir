function caesar(text, key) {
  return text.split('').map(char => {
    let code = char.charCodeAt(0);
    if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode((code - 65 + key) % 26 + 65);
    } else if (char >= 'a' && char <= 'z') {
      return String.fromCharCode((code - 97 + key) % 26 + 97);
    } else {
      return char;
    }
  }).join('');
}

function bruteForce() {
  const text = document.getElementById("text").value;
  let output = "";
  for (let key = 1; key < 26; key++) {
    let decrypted = caesar(text, 26 - key);
    output += `Kalit ${key}: ${decrypted}\n`;
  }
  document.getElementById("result").innerText = output;
}