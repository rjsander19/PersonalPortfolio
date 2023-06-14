import React from 'react';
import { useNaviagte, useParams } from 'react-router-dom';
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
          <div className="toprow">

          <div className="card1">
            <h3>Description: </h3>
              {project.description}
          </div>

            <div class="card2">
                <h1>{project.name}</h1>
                <img 
                    className="avatar-image" 
                    src={project.image} 
                    alt={project.name} 
                    />
            </div>

            <div className="card7">
                <h3>Technologies used for this project:</h3>
                    {project.technology}
            </div>
        </div>

          <div className="card6">
            <h3>My thoughts on this project:</h3>
              {project.process}
          </div>
      </div>
      
      <div className="links">
            <div className="card4">
                <h3>Link to this project's live site:</h3>
                <a href={project.website} target="_blank" rel="noopener noreferrer">{project.website}</a>
            </div>

            <div className="card5">
                <h3>Link to code for this project:</h3>
                <a href={project.codes} target="_blank" rel="noopener noreferrer">{project.codes}</a>
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

        <button onClick={handleDelete} className="deletebtn">Delete</button>
        <button onClick={handleEdit} className="editbtn"> { isEditing ? 'Cancel Edit' : 'Edit' }</button>
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
  <input
    type="text"
    value={editForm.website}
    name="website"
    placeholder="website"
    onChange={handleChange}
  />
  <input
    type="text"
    value={editForm.codes}
    name="codes"
    placeholder="codes"
    onChange={handleChange}
  />
  <input
    type="text"
    value={editForm.process}
    name="process"
    placeholder="process"
    onChange={handleChange}
  />
  <input type="submit" value="Update Project" />
</form>
}
    </div>
  )
};


export default Show;

