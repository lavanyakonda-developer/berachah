import React, { useState } from "react";
import { Col, Row, Image } from "react-bootstrap";
import Masonry from "masonry-layout";
import _ from "lodash";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Import the styles for the lightbox
import { extractFileIdFromGoogleDriveLink } from "./Utils";

const galleryPics = [
  {
    src: extractFileIdFromGoogleDriveLink(
      "https://drive.google.com/file/d/1-kYWmnmLr8tnCAa09e3ENh_NLzH_Pwy_/view?usp=sharing"
    ),
    width: 370,
    height: 256,
  },
  {
    src: extractFileIdFromGoogleDriveLink(
      "https://drive.google.com/file/d/1iwyioZ01sge_V7j6nhp1SuW_k-NjmSzG/view?usp=sharing"
    ),
    width: 370,
    height: 256,
  },
  {
    src: extractFileIdFromGoogleDriveLink(
      "https://drive.google.com/file/d/1CDQDkd33AHAMw1mXuf-XS1FXZ0Wtcka8/view?usp=sharing"
    ),
    width: 370,
    height: 256,
  },
  {
    src: extractFileIdFromGoogleDriveLink(
      "https://drive.google.com/file/d/129FoTjLrxREzWYzk8Oe_EQCLKMehjTQE/view?usp=sharing"
    ),
    width: 370,
    height: 464,
  },
  {
    src: extractFileIdFromGoogleDriveLink(
      "https://drive.google.com/file/d/1HTb2NWYKFgnk7HVnYjsFc8uMvQfQ-8sR/view?usp=sharing"
    ),
    width: 370,
    height: 464,
  },
  {
    src: extractFileIdFromGoogleDriveLink(
      "https://drive.google.com/file/d/1J-2F77HX26MYaCaf_t5lp7_BrBsW97vx/view?usp=sharing"
    ),
    width: 370,
    height: 256,
  },

  {
    src: extractFileIdFromGoogleDriveLink(
      "https://drive.google.com/file/d/1ejhVJF63-FhXQ-bijDfnd_Sj8x2DFV7Y/view?usp=sharing"
    ),
    width: 370,
    height: 256,
  },
  {
    src: extractFileIdFromGoogleDriveLink(
      "https://drive.google.com/file/d/1J-2F77HX26MYaCaf_t5lp7_BrBsW97vx/view?usp=sharing"
    ),
    width: 370,
    height: 256,
  },
  {
    src: extractFileIdFromGoogleDriveLink(
      "https://drive.google.com/file/d/1ejhVJF63-FhXQ-bijDfnd_Sj8x2DFV7Y/view?usp=sharing"
    ),
    width: 370,
    height: 256,
  },
];

const Gallery = () => {
  const [masonry, setMasonry] = useState(null);

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setPhotoIndex(0);
    setIsOpen(false);
  };

  React.useEffect(() => {
    const grid = document.querySelector(".gallery");
    const masonryInstance = new Masonry(grid, {
      itemSelector: ".gallery-item",
      columnWidth: ".gallery-item",
      gutter: 10,
    });

    setMasonry(masonryInstance);
  }, []);

  const renderImage = (image, index) => {
    return (
      <Col key={image.src} xs={6} md={4} className="gallery-item col-md-3">
        <Image
          src={image.src}
          width={370}
          height={256}
          onClick={() => openLightbox(index)}
          style={{ cursor: "pointer" }}
        />
      </Col>
    );
  };

  return (
    <div className="gallery-container">
      <h3>Our Gallery</h3>
      <div className="gallery">{_.map(galleryPics, renderImage)}</div>;
      {isOpen && (
        <Lightbox
          mainSrc={galleryPics[photoIndex].src}
          nextSrc={galleryPics[(photoIndex + 1) % galleryPics.length].src}
          prevSrc={
            galleryPics[
              (photoIndex + galleryPics.length - 1) % galleryPics.length
            ].src
          }
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + galleryPics.length - 1) % galleryPics.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % galleryPics.length)
          }
        />
      )}
    </div>
  );
};

export default Gallery;
