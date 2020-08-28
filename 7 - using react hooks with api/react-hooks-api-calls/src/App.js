import React, {useState, useEffect, Fragment} from 'react';
import './App.css';


function GithubCommit() {
  const [page, setPage] = useState(1);
  const [commitHistory, setCommitHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const loadMoreCommit = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    const apiLink = `https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`;
    fetch(
      apiLink,
      {
        method: 'GET',
        headers: new Headers ({
          Accept: 'application/vnd.github.cloak-preview'
        })
      }
    )
    .then(res => res.json())
    .then(response => {
      setCommitHistory(response.items);
      setIsLoading(false);
    })
    .catch(error => console.log(error));
  }, [page]);


  return (
    <div className="App">
     <h1>API calls with React Hooks</h1>
     {isLoading && <p>Please wait, your data is loading...</p>}

     { commitHistory.length !== 0 && (
       <button onClick={loadMoreCommit}>
         Load More commits
       </button>
     )}

     {commitHistory.map((singleCommit, index) => (
       <div key={index}>
         {singleCommit.commit && (
           <Fragment>
             <div>
               <h2 style={{ textDecoration: "underline" }}>
                  {singleCommit.commit.committer.name}
               </h2>
               <p>{singleCommit.commit.message}</p>
             </div>
             <hr />
           </Fragment>
         )}
       </div>
     ))}

    </div>
  );
}

export default GithubCommit;
