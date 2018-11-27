const connection = require('./connection.js')

const orm = (() => {

    const questions = num => Array(num).fill('?').toString();
    const dblQuestions = num => Array(num).fill('??').toString();

    const sqlVals = object => {
        let arrPairs = Object.entries(object)
        return arrPairs.map(x => `${x[0]} = '${x[1]}'`).join(', ');
    }

    const selectAll = table => {
        return new Promise((resolve, reject) => {
            let queryString = `SELECT * FROM ${table};`;
            connection.query(queryString, (err, res) => {
                if (err) reject(err);
                resolve(res)
            })
        })
    }

    const selectSome = (table, ...cols) => {
        return new Promise((resolve, reject) => {
            let colList = cols.join(', ')
            let queryString = `SELECT ${colList} FROM ${table}`
            connection.query(queryString, (err, res) => {
                if (err) reject(err)
                resolve(res)
            })
        })
    }

    const selectSomeWhere = (table, whereCol, whereVal, selectCols) => {
        return new Promise((resolve, reject) => {            
            let queryString = `SELECT ${dblQuestions(selectCols.length)} FROM ${table} WHERE ?? = ?`;
            let vals = [...selectCols, whereCol, whereVal]
            connection.query(queryString, vals, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    const selectSomeJoin = (table1, table2, t1Cols, t2Cols, t1Key, t2Key, conditionCol, conditionVal) => {
        return new Promise((resolve, reject) => {
            let table1Selectors = t1Cols.map(value => `${table1}.${value}`)
            let table2Selectors = t2Cols.map(value => `${table2}.${value}`)
            let selectors = [...table1Selectors, ...table2Selectors]
            let queryString = `SELECT ${dblQuestions(selectors.length)} FROM ?? INNER JOIN ?? ON ?? = ?? WHERE ?? = ?`
            let vals = [...table1Selectors, ...table2Selectors, table1, table2, t1Key, t2Key, conditionCol, conditionVal]
            connection.query(queryString, vals, (err, res) => {
                if (err) reject(err);
                resolve(res)
            })
        })
    }
    const insertOne = (table, cols, vals) => {
        return new Promise((resolve, reject) => {
            let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${questions(vals.length)});`;
            connection.query(queryString, vals, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    const updateOne = (table, vals, condition) => {
        return new Promise((resolve, reject) => {
            let queryString = `UPDATE ${table} SET ${sqlVals(vals)} WHERE ${condition};`;
            connection.query(queryString, (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    const deleteOne = (table, condition) => {
        return new Promise((resolve, reject) => {
            let queryString = `DELETE FROM ?? WHERE ${condition}`
            connection.query(queryString, [table], (err, res) => {
                if (err) reject(err);
                resolve(res);
            })
        })
    }

    return {
        selectAll,
        selectSome,
        selectSomeWhere,
        insertOne,
        updateOne,
        selectSomeJoin,
        deleteOne
    }

})()


module.exports = orm;