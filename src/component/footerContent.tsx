import { FooterContentProps } from "../interface/interface";

export default function FooterContent({
  img,
  alt_img,
  order,
  title,
  content,
}: FooterContentProps) {
  return (
    <section className="footer-content">
      <div className="footer-img">
        <img src={img} alt={alt_img} />
      </div>
      <div className="footer-description">
        <h2>{order}</h2>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </section>
  );
}
