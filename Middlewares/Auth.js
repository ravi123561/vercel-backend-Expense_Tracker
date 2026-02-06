
const jwt = require('jsonwebtoken');
// This code ensures that only users with a valid and non-expired JWT token can access protected APIs by verifying the token, attaching user data to
//  the request, and blocking unauthorized requests.
// Request → ensureAuthenticated → Controller
const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        return res.status(403)
            .json({ message: 'Unauthorized, JWT token is require' });
    }
    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403)
            .json({ message: 'Unauthorized, JWT token wrong or expired' });
    }
}
module.exports = ensureAuthenticated;