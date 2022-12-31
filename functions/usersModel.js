const { pool } = require('./database.js');

class Users {
    async get_bookmarks(user_id) {
        try {
            const [rows, fields] = await pool.execute('SELECT books.id, books.name, books.description, books.imgUrl, (case when bookmarks.book_id=books.id then true else false end) as bookmarked FROM books LEFT JOIN bookmarks ON bookmarks.user_id=? AND bookmarks.book_id=books.id;', [user_id]);
            return rows;
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}

exports.Users = Users;