import React, { useEffect, useState } from 'react'
import Card from './Card'
import InfiniteScroll from 'react-infinite-scroll-component';



function Cards() {
  const [repodata,setRepoData] = useState([])
  const [page,setPage] = useState(1)
  const [loadData,setLoadData] = useState(false);
  
  async function getrepodata(){
    setLoadData(true)
    try{
      let res = await fetch(`https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=${page}`);
      let data = await res.json();
      setRepoData([...repodata, ...data.items])
      setPage(page+1)
    }
    catch(err){
      console.log(err)
    }
    
    setLoadData(false)
  }


  useEffect(()=>{
    getrepodata();
  },[])

  return (   
    <div className='cards'>
      <InfiniteScroll
          dataLength={repodata.length}
          next={getrepodata}
          hasMore={true}
          loader={<h3>Loading...</h3>}
        >
          {repodata.map((element,idx)=>{
            return <Card key={'repo'+idx} repo={element}/>
          })}
      </InfiniteScroll>
    </div>
   
  )
}

export default Cards