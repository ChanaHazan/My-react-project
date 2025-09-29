import React from 'react'

const Books = () => {

    const book = [
        { id: "1", bookName: "MALALEL", author: "M.K", publish: 2015, amount: 100 },
        { id: "2", bookName: "GAM KI ELECH", author: "L.K", publish: 2020, amount: 50 },
        { id: "3", bookName: "DAM KAR", author: "Y.S", publish: 2000, amount: 40 },
        { id: "4", bookName: "DADI GAMADI", author: "M.F", publish: 1980, amount: 200 }
    ]

    return (
        <>
            <h1>My Books</h1>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Author</th>
                    <th>PublishedYear</th>
                    <th>Amount</th>
                </tr>
                {
                    book.map(b => <tr key={b.id}>
                        <td>{b.id}</td>
                        <td>{b.bookName}</td>
                        <td>{b.author}</td>
                        <td>{b.publish}</td>
                        <td>{b.amount}</td>
                    </tr>)
                }
            </table>
        </>
    )
}

export default Books