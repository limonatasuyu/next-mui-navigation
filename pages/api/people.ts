// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid';


const people = [
  {
  firstName: 'Emre',
  id: String(uuidv4()),
  lastName: 'Dilek',
  },
  {
    firstName: 'Mehmet',
    id: String(uuidv4()),
    lastName: 'Yılmaz',
  },
  {
    firstName: 'Ahmet',
    id: String(uuidv4()),
    lastName: 'Başaran',
  },
  {
    firstName: 'Birisi',
    id: String(uuidv4()),
    lastName: 'Birininoğlu',
  },
  
]


type Data = {
  firstName: string
  id: string
  lastName: string 
}[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  res.status(200).json(people)
}
