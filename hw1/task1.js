console.log('Task 1.')

const musicCollection = [
  {
    title: 'Альбом 1',
    artist: 'Исполнитель 1',
    year: 2001
  },
  {
    title: 'Альбом 2',
    artist: 'Исполнитель 2',
    year: 2002
  },
  {
    title: 'Альбом 3',
    artist: 'Исполнитель 3',
    year: 2003
  }
]

musicCollection[Symbol.iterator] = function () {
  return {
    current: 0,
    to: this.length,
    next () {
      return this.current < this.to
        ? { done: false, value: musicCollection[this.current++] }
        : { done: true }
    }
  }
}

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`)
}
