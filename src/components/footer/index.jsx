import { Link } from "react-router-dom";
import Logo from "./logo.svg";
export default function Footer() {


  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
    <div className="row">
      <div className="col-12 col-md">
        <img className="mb-2" src={Logo} alt="" width="24" height="19"/>
        <small className="d-block mb-3 text-body-secondary">&copy; 2017 - 2023</small>
      </div>
      <div className="col-6 col-md">
        <h5>Features</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><Link className="link-secondary text-decoration-none" href="#">Cool stuff</Link></li>
          <li className="mb-1"><Link className="link-secondary text-decoration-none" href="#">Random feature</Link></li>
          <li className="mb-1"><Link className="link-secondary text-decoration-none" href="#">Team feature</Link></li>
          <li className="mb-1"><Link className="link-secondary text-decoration-none" href="#">Stuff for developers</Link></li>
          <li className="mb-1"><Link className="link-secondary text-decoration-none" href="#">Another one</Link></li>
          <li className="mb-1"><Link className="link-secondary text-decoration-none" href="#">Last time</Link></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Resources</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><Link className="link-secondary text-decoration-none" href="#">Resource</Link></li>
          <li className="mb-1"><Link className="link-secondary text-decoration-none" href="#">Resource name</Link></li>
          <li className="mb-1"><Link className="link-secondary text-decoration-none" href="#">Another resource</Link></li>
          <li className="mb-1"><Link className="link-secondary text-decoration-none" href="#">Final resource</Link></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>About</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><Link className="link-secondary text-decoration-none" href="#">Team</Link></li>
          <li className="mb-1"><Link className="link-secondary text-decoration-none" href="#">Locations</Link></li>
          <li className="mb-1"><Link className="link-secondary text-decoration-none" href="#">Privacy</Link></li>
          <li className="mb-1"><Link className="link-secondary text-decoration-none" href="#">Terms</Link></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}
