import footerStyles from "./footer.module.css"

export default function Footer () {
  return (
    <>
      <footer className={footerStyles.container} >

      <div className={footerStyles.left} > 
      <p> TWITTER </p> 
      <p> INSTAGRAM </p>
      <p> FACEBOOK </p>
      <p> TIKTOK </p>
      </div>

      <div className={ footerStyles.right } > 
      <p> PRODUCTS </p> 
      <p> ABOUT US </p>
      <p> CONTACT US </p>
      <p> TERMS & CONDITIONS </p>
      </div>


      </footer>
    </>
  );
};
