const express = require('express');
const { getAllTransactions, addTransaction,
     deleteTransaction }
    = require('../Controllers/ExpenseController');
const router = express.Router();

router.get('/getData', getAllTransactions);
router.post('/add', addTransaction);
router.delete('/:expenseId', deleteTransaction);

//this is also valid but for each operation need middleware authentication so good practise is that inside index.js middleware is called.
// router.get('/getData', ensureAuthenticated, getAllTransactions);
// router.post('/add', ensureAuthenticated, addTransaction);
// router.delete('/:expenseId', ensureAuthenticated, deleteTransaction);


module.exports = router;