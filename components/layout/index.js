import HeaderSection from "../header/index";
import FooterSection from "../footer/index";

export default function index(props) {
  const { children } = props;
  return (
    <div className="flex flex-col border-0 h-screen border-black w-full">
      <HeaderSection />
      <div className=" bg-grey-100">{children}</div>
      <FooterSection />
    </div>
  );
}
