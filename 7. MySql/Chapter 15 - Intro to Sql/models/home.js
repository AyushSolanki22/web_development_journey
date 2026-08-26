const db = require('../utils/database');

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, id) {
    this.name = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.imageUrl = photoUrl;
    this.description = description;
    this.id = id;
  }

  save() {
  if (this.id) {
    // Edit existing home
    return db.execute(
      `UPDATE homes
       SET name = ?, price = ?, location = ?, rating = ?, imageUrl = ?, description = ?
       WHERE id = ?`,
      [
        this.name,
        this.price,
        this.location,
        this.rating,
        this.imageUrl,
        this.description,
        this.id
      ]
    );
  } else {
    // Add new home
    return db.execute(
      `INSERT INTO homes
       (name, price, location, rating, imageUrl, description)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        this.name,
        this.price,
        this.location,
        this.rating,
        this.imageUrl,
        this.description
      ]
    );
  }
}

  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId) {
    return db.execute("SELECT * FROM homes WHERE id=?",[homeId]);
  }

  static deleteById(homeId) {
    return db.execute("DELETE FROM homes WHERE id=?",[homeId]);
  }
};