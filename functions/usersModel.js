const {pool} = require('./database.js');

class Users {
    async get_bookmarks(user_id) {
        try {
            const [rows, fields] = await pool.execute('SELECT books.id, books.name FROM books INNER JOIN bookmarks ON bookmarks.user_id=? AND bookmarks.book_id=books.id;', [user_id]);
            return rows;
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}

exports.Users = Users;