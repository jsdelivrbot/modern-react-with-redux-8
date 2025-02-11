import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';

class NewPost extends Component {
  renderField(field){
    const { meta: { touched, error } } = field;
    const classes = `form-control ${ touched && error ? 'is-invalid': '' }`;

    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input type="text" className={classes} {...field.input} />
        <div className="invalid-feedback">
          { touched ? error : '' }
        </div>
      </div>
    )
  }

  onSubmit(values){
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render(){
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field label="Categories" name="categories" component={this.renderField} />
        <Field label="Post Content" name="content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = "Enter a title!";
  }
  if(!values.categories){
    errors.categories = "Enter some categories";
  }
  if(!values.content){
    errors.content = "Enter some content";
  }

  return errors;
}

export default  reduxForm({
  validate,
  form: 'NewPostsForm'
})(
  connect(null, { createPost })(NewPost)
);
