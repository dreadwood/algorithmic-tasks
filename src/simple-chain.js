// const 
let chainMaker = {
  chain: [],
  getLength() { // возвращает длину цепи в виде числа
    return this.chain.length;
  },
  addLink(value) { // добавляет строку в цепь. Если нет аргумента добавить ( )
    let link = '( )';
    if (value !== undefined) {
      link = '( ' + value + ' )';
    }
    this.chain.push(link);
    return this;
  },
  removeLink(position) { // удаляет УКАЗАНОЕ звено в цепи. Если аргумент не целое число нужно кинуть ошибку
    if (position < 1 || position > this.getLength() || typeof(position) !== 'number') {
      this.chain = [];
      throw Error;
    }
    this.chain.splice(position - 1, 1);
    return this
  },
  reverseChain() { // переворачивает цепь
    this.chain.reverse()
    return this
  },
  finishChain() { // заканчивает цепь и возвращает её. Зачем-то нужно удалть
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
