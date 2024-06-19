import bcrypt from 'bcryptjs';

export default hashedData = (param) => {
  class HashedData {
    constructor(data) {
      (this.email = data.email),
        (this.password = bcrypt.hashSync(data.password, 10));
    }

    getData() {
      return { email: this.email, password: this.password };
    }
  }

  const data = new HashedData(param).getData();
  return data;
};

// const test = hashedData(data);
// console.log(await bcrypt.compare(newData.password, test.password));
