import React from "react";


export default function Table ( {users} ) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Kelas</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {users.map((users) => {
                    return (
                        <tr key={users._id}>
                            <td>{users.name}</td>
                            <td>{users.kelas}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}