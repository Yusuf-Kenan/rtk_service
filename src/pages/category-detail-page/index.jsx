import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import BlogsCard from "./components/blogs-component";
import ServicesCard from "./components/services-component";

export default function CategoryDetailPage() {
  const params = useParams();
  const api = useApi();
  const [catDetails, setCatDetails] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [services, setServices] = useState(null);

  // const api = useApi();
  // const [catDetails, setCatDetails] = useState(null);
  // const [blogs, setBlogs] = useState(null);
  // const [services, setServices] = useState(null);

  useEffect(() => {
    api
      .get(`public/categories/getBySlug/${params.slug}`)
      .then((res) => {
        setCatDetails(res.data.data.category);
        setBlogs(res.data.data.blogs);
        setServices(res.data.data.services);
        console.log("Slug :" + res.data.data.category.name);
        console.log("Blog :" + blogs[1].content);
        console.log("Service :" + services[1].description);
      })
      .catch((err) => console.log("Slug :" + err));
  }, []);

  if (catDetails === null) return <h1>Loading...</h1>;
  return (
    <>
      <h2 className="text-center">{catDetails.name}</h2>
      <p className="text-center">{catDetails.description}</p>
      <img className="rounded mx-auto d-block" src="https://picsum.photos/200/300?grayscale" alt="service-img" />
      <hr />
      <h2 className="text-center">Services</h2>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {services.map((item, index) => {
          return (
            <div key={index} className="col">
              <ServicesCard service={item} />
            </div>
          );
        })}
      </div>

      <hr />

      <h2 className="text-center">Blogs</h2>

      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {blogs.map((item, index) => {
          return (
            //buraya bloglar gelecek
            <div key={index} className="col">
              <BlogsCard blog={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}
