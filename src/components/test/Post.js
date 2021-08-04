function Post(props) {
  const { id, title, body } = props.data;
  return (
    <div>
      <ul>
        <li className='bg-info p-2'>
          <div><strong>Id : </strong> {id}</div>
          <div><strong>Title : </strong> {title} </div>
          <div><strong>Body : </strong> {body} </div>
        </li>
      </ul>
    </div>
  );
}
export default Post;
