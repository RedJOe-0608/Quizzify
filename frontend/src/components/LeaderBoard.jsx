import React from 'react'
import { Table } from 'react-bootstrap'
import { useGetUsersQuery } from '../slices/usersApiSlice'

const LeaderBoard = () => {

    const {data: users} = useGetUsersQuery()
    console.log(users);

    let filteredData = []
    users?.forEach((user) => {
        let score = 0
        score= (user?.javascript?.overallScore+user?.react?.overallScore+user?.python?.overallScore)
        console.log(score);
        filteredData.push({name: user.name, id: user?._id, score: score})
    })

    // console.log(filteredData);

    //sorted scores
    for(let i = 0;i<filteredData.length-1;i++)
{
  for(let j = 0;j<filteredData.length-i-1;j++)
  {
      if(filteredData[j].score < filteredData[j+1].score)
      {
        let temp = filteredData[j];
        filteredData[j] = filteredData[j+1];
        filteredData[j+1] = temp;
      }
  }
}

console.log(filteredData);
  
  return (
    <>
      <h1 className='mb-4'>LEADERBOARD</h1>
      <Table stripped="true" hover responsive className='table-sm'>

        <thead>
        <tr>
            <th>RANK</th>
            <th>NAME</th>
            <th>SCORE</th>
            </tr>
        </thead> 
        <tbody>
            {filteredData.map((user,i) => (
                <tr key={user.id}>
                    <td>{i+1}</td>
                    <td>{user?.name}</td>
                    <td>{user?.score }</td>
                </tr>
            ))}
        </tbody>
    </Table>
    </>
  )
}

export default LeaderBoard
