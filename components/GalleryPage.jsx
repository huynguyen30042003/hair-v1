import React from "react";
import Image from "next/image";
import ImgGallery1 from "../data/images/gallery/gallery-item-1.jpg";
import ImgGallery2 from "../data/images/gallery/gallery-item-2.jpg";
import ImgGallery3 from "../data/images/gallery/gallery-item-3.jpg";

const GalleryPage = () => {
  const Infogallery = [
    { id: 1, src: ImgGallery1, title: "Gallery Title 1" },
    { id: 2, src: ImgGallery2, title: "Gallery Title 2" },
    { id: 3, src: ImgGallery3, title: "Gallery Title 3" },
  ];

  return (
    <section id="section-testimonial" className="pt80">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <h2 className="wow fadeIn">Gallery</h2>
            <div className="de-separator" />
            <div className="spacer-single" />
          </div>
        </div>
        <div id="gallery" className="row g-3">
          {Infogallery.map((image) => (
            <div key={image.id} className="col-md-4 item">
              <div className="de-image-hover rounded">
                <a href={image.src} className="image-popup">
                  <span className="dih-title-wrap">
                    <span className="dih-title">{image.title}</span>
                  </span>
                  <span className="dih-overlay" />
                  <Image
                    src={image.src}
                    className="lazy img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPage;
