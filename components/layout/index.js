import HeaderSection from "../header/index";
import FooterSection from "../footer/index";

export default function index(props) {
  const { children } = props;
  return (
    <div className="flex flex-col border-0 border-black w-full">
      <HeaderSection />
      <div className=" bg-grey-100 -mt-8 pt-16 pb-3 min-h-screen">
        {children}
      </div>
      <FooterSection />
    </div>
  );
}
