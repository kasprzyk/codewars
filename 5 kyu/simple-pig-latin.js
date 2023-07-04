pigIt = str => str.split(' ').map(word => /^[A-Za-z]+$/.test(word) ? word.substring(1) + word[0] + 'ay' : word).join(' ')
