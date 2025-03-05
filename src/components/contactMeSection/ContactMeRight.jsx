import ContactInfo from "./ContactInfo";
const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 ">
      <img
        src="../../public/images/abidLogo.jpg"
        alt="email image"
        className="max-w-[300px] rounded-full"
      />
      <ContactInfo />
    </div>
  );
};

export default ContactMeRight;