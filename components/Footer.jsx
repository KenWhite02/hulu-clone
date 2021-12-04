const Footer = () => {
  let year = new Date();

  return (
    <div className="flex justify-center align-middle my-10">
      <h2>Developed by Ken White | {year.getFullYear()} &copy;</h2>
    </div>
  );
};

export default Footer;
