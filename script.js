document.getElementById('content-generator-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const category = document.getElementById('category').value;
  const style = document.getElementById('style').value;
  const authorStyle = document.getElementById('author-style').value;
  const about = document.getElementById('about').value;
  const area = document.getElementById('area').value;
  const wordCount = document.getElementById('word-count').value;
  const keywords = document.getElementById('keywords').value;

  // Generate prompt
  const prompt = `
    Kategori: ${category}
    Gaya Tulisan: ${style}
    Gaya Penulis: ${authorStyle}
    Tentang: ${about}
    Area: ${area}
    Jumlah Kata: ${wordCount}
    Kata Kunci: ${keywords}

    Silakan buat konten berdasarkan detail di atas.
  `;

  // Display prompt
  document.getElementById('generated-prompt').textContent = prompt;
  document.getElementById('output').classList.remove('hidden');
});
