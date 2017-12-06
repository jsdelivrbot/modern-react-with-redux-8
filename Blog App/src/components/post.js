import React, { Component } from 'react';
import { connect } from  'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class Post extends Component {
  componentDidMount(){
    if(!this.props.post){
      const postId = this.props.match.params.id;
      this.props.fetchPost(postId);
    }
  }

  onDeleteHandler(){
    const {id} = this.props.match.params;
    this.props.deletePost(id, () =>{
      this.props.history.push('/');
    })
  }

  render(){
    const {post} = this.props;

    if(!post){
      return <div>Loading!!!</div>
    }

    return (
      <div>
        <Link to="/" >Home</Link>
        <button className="btn btn-danger float-right"
          onClick={this.onDeleteHandler.bind(this)}>Delete Post</button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStatetoProps( { posts }, ownProps){
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default connect(mapStatetoProps, { fetchPost, deletePost })(Post);
