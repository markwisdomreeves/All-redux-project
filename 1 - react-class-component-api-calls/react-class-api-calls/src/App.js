import React, {Component, Fragment} from 'react';
import './App.css';


class GithubCommitAPI extends Component {
  constructor() {
    super();
    this.state = {
      commitHistory: [],
      page: 1,
      isLoading: true
    };
    this.loadMoreCommit = this.loadMoreCommit.bind(this);
  }


  componentDidMount() {
    this.loadCommitHistory();
  }

  loadMoreCommit() {
    const { page } = this.state;
    this.setState({
      page: page + 1
    },
    () => this.loadCommitHistory()
    );
  }


  loadCommitHistory() {
    const { page } = this.state;
    const apiLinkHandler = `https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`;
    // we are fetching the data from Facebook Jest Repo
    
    fetch(
      apiLinkHandler, 
      {
        method: 'GET',
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview"
        })
      }
    )
     .then(res => res.json())
     .then(response => {
      this.setState({ commitHistory: response.items, isLoading: false });
     })
     .catch(error => console.log(error));
  }



  render() {
    const { commitHistory, isLoading } = this.state;
    return (
      <div className="App">
        <h1>API calls with React Class Component</h1>

        { isLoading && <p>we are Loading the Data from the GITHUB API</p> }

        { 
        commitHistory.length > 0 ? 
          <div>
            <button onClick={() => this.loadMoreCommit()}>
              Load More Commits from GitHub API
            </button>
          </div>
          :
          <div>
            <h3>We are sorry, There is no data available from the GitHub API</h3>
          </div>
        }
        

        {/* {
          commitHistory.length !== 0 && (
            <button onClick={() => this.loadMoreCommit()}>
              Load More Commits from GitHub API
            </button>
          )
        } */}

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
    )
  }
}



export default GithubCommitAPI;
