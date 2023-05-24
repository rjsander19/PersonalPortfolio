import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../Show.css';

const Show = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const projects = props.projects
  console.log(id);
  
  const project = projects ? projects.find((p) => p._id === id ) : null

  const [ editForm, setEditForm ] = useState({ post: ''});

  const [isEditing, setisEditing] = useState(false);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (project) {
      setEditForm(project);
    }
  }, [project]);

  useEffect(() => {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);


  const handleChange = (e) => {
    setEditForm( {
      ...editForm,
     [e.target.name]: e.target.value 
    })
  };
  
  const handleUpdate = (e) => {
    e.preventDefault()
    props.updateProjects(editForm, project._id)
  };

  const handleEdit = () => {
    setisEditing(prevState => !prevState)
  };

  const handleDelete = () => {
    props.deleteProjects(project._id)
    navigate('/projects')
  };


//Comment section
  

const handleCommentSubmit = (e) => {
  e.preventDefault();
  if (editForm.post.trim() !== '') {
    const newComment = {
      projectId: project._id,
      comment: editForm.post.trim(), 
    };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setEditForm((prevEditForm) => ({ ...prevEditForm, post: '' }));
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  }
};

  
  const loaded = () => {
    const projectComments = comments.filter(
      (comment) => comment.projectId === project._id
    );
    return (
      <>
      <div className="show-container">
      <div className="card-row">
      <div class="card2">
        <h1>{project.name}</h1>
        <img 
          className="avatar-image" 
          src={project.image} 
          alt={project.name} 
        />
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleEdit}>{ isEditing ? 'Cancel Edit' : 'Edit' }</button>
      </div>
      <div className="card1">
        <h3>Description: {project.description}</h3>
      </div>
      </div>
      <div className="card3">
            <h3>Comments</h3>
            <div className="comment-box">
            <div className="comment-list">
            {projectComments.map((comment, index) => (
              <p key={index}>{comment.comment}</p>
            ))}
            </div>
            </div>
            <form onSubmit={handleCommentSubmit}>
              <input
                type="text"
                value={editForm.post}
                name="post"
                placeholder="Add a comment"
                onChange={handleChange}
              />
              <input type="submit" value="Add Comment" />
            </form>
          </div>
        </div>
      </>
    );
  };


  const loading = () => {
    return <h1>Loading ...</h1>;
  };

  return (
    <div className="project">
      { project ? loaded() : loading() }

      { isEditing &&

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.technology}
          name="technology"
          placeholder="technology"
          onChange={handleChange}
        />
        <input type="submit" value="Update Project" />
      </form>
      }
    </div>
  )
};


export default Show;

