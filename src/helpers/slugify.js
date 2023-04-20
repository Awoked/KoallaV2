function slugify(text) {
    const turkishChars = {
        "ı": "i",
        "ö": "o",
        "ü": "u",
        "ş": "s",
        "ğ": "g",
        "ç": "c",
        "İ": "I",
        "Ö": "O",
        "Ü": "U",
        "Ş": "S",
        "Ğ": "G",
        "Ç": "C"
    };

    return text
        .toString() // input'u string tipine dönüştür
        .toLowerCase() // küçük harfe çevir
        .replace(/\s+/g, '-') // boşlukları tire ile değiştir
        .replace(/[^\w\-]+/g, '') // özel karakterleri kaldır
        .replace(/./g, function (char) { // Türkçe karakterleri İngilizce karakterlere dönüştür
            return turkishChars[char] || char;
        })
        .replace(/\-\-+/g, '-') // ardışık tireleri tek tire ile değiştir
        .replace(/^-+/, '') // baştaki tireleri kaldır
        .replace(/-+$/, ''); // sondaki tireleri kaldır
}

export default slugify;