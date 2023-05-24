/* eslint-disable react/prop-types */

export default function ServicesCard(props) {
  return (
    <div className="card mb-4 rounded-3 shadow-sm border-success">
          <div className="card-header py-3 text-bg-success border-success">
            <h4 className="my-0 fw-normal text-nowrap">{props.service.name}</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">
            € {props.service.commission_price}
            </h1>
            <p>{props.service.description.substring(0, 190).concat('...')}</p>
            
          </div>
        </div>
  );
}
