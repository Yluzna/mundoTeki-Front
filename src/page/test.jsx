import React, { useEffect, useState } from 'react'
import { getRelevantPost } from '../services/postService';

function Test() {

    const [relevantPostData, setRelevantPostData] = useState([])

    
    const fetchRelevantPost = async () => {
    const relevantPost = await getRelevantPost();
    setRelevantPostData(relevantPost);
  }

  useEffect(() => fetchRelevantPost(), [])
  //fetchRelevantPost()


  console.log(relevantPostData)


  return (
    <div>{
        <img src={relevantPostData.image_url} />   
    }</div>
  )
}

export default Test