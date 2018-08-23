import React, { Component } from 'react';

import CommentBox from './CommentBox';
import CommentList from './CommentList';


 class App extends Component {
	constructor(props) {
		super(props);

    // Setting the state to dummy data since we don't have a backend to provide the data.
		this.state = {
		comments: [
			{id: 1, 
			author: "John Doe", 
			comment: "This is a comment", 
			replies:[
				{id: 1, name: "John Doe", text: "This is a comment"},
				{id: 2, name: "Jack Daniel", text: "This is *another* comment"},
				{id: 3, name: "Jonny Walker", text: "And here is one more comment"}]
			},
			{id: 2, author: "Jack Daniel", comment: "This is *another* comment",replies:[]},
			{id: 3, author: "Jonny Walker", comment: "And here is one more comment",replies:[]}
			]
		}

		this.handleAddComment = this.handleAddComment.bind(this);
		this.handleAddReply = this.handleAddReply.bind(this);
		this.deleteComment = this.deleteComment.bind(this);
	}

	handleAddComment(comment) {
		this.setState(prevState => {
		return {
			comments: prevState.comments.concat(comment)
		};
		});
	}

    handleAddReply(comment) {
      // Find the index of the comment that was updated.
        const index = this.state.comments.findIndex(item => item.id === comment.id);

        if (index >=0 ) {
            this.setState(prevState => {
                return {
                    comments : [...prevState.comments.slice(0, index),
                                comment,
                                ...prevState.comments.slice(index + 1)]
                }
            });
        }
    }

    deleteComment(comment) {
      // Find the index of the comment that was deleted.
        const index = this.state.comments.findIndex(item => item.id === comment.id);
  
        if (index >=0 ) {
            this.setState(prevState => {
                return {
                    comments : [...prevState.comments.slice(0, index),
                          ...prevState.comments.slice(index + 1)]
                }
            });
        }
    }

   render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
            <CommentBox handleAddComment={this.handleAddComment} />
            <hr/>

            <h4> Active Comments </h4>
            <CommentList 
              addReply={this.handleAddReply} 
              deleteComment={this.deleteComment} 
              comments={this.state.comments} 
            />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
 export default App;