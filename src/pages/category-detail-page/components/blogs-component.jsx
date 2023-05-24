/* eslint-disable react/prop-types */

export default function BlogsCard(props) {
  console.log(props);
  return (
    <div className="card mb-4 rounded-3 shadow-sm border-info">
      <div className="card-header py-3 text-bg-warning border-primary">
        <h6 className="my-0 fw-normal text-nowrap">{props.blog.title}</h6>
      </div>
      <div className="card-body">
        <p>{props.blog.content.slice(0,100-4)}</p>
      </div>
    </div>
  );
}
