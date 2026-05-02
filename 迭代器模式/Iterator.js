class Iterator {
  constructor(items) {
    this.index = 0;
    this.items = items;
  }

  hasNext() {
    return this.index < this.items.length;
  }

  next() {
    return this.items[this.index++];
  }
}

const arr = [1, "red", false, 3.14];
const iterator = new Iterator(arr);
while (iterator.hasNext()) {
  const current = iterator.next();
  console.log(current);
}
