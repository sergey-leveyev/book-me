class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const location = this.queryStr.location
      ? {
          address: {
            $regex: this.queryStr.location,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...location });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };

    //Remove fields from query
    const removeFields = ["location", "page"];
    removeFields.forEach((el) => delete queryCopy[el]);

    this.query = this.query.find(queryCopy);
    return this;
  }

  pagination(rooms) {
    // const currentPage = Number(this.queryStr.page) || 1;
    // const skip = resPerPage * (currentPage - 1);
    // this.query = this.query.limit(resPerPage).skip(skip);
    // return rooms;
    // const limit = 2;
    // const startIndex = (currentPage - 1) * limit;
    // const endIndex = currentPage * limit;
    // const resultUsers = rooms.slice(startIndex, endIndex);
    // return resultUsers;
  }
}

export default APIFeatures;
