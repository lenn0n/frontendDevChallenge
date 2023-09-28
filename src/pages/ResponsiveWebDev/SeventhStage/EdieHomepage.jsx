import React from "react"
import Footer from "@components/Footer/Footer"
import HeroImage from "@assets/images/edie/heroImage.jpg"
const EdieHomepage = () => {

  const ServiceCard = ({ icon, title, desc, selected = false }) => {
    return (
      <div className="py-[46px] px-[34px] w-[341px] rounded-3xl hover:shadow-lenon hover:shadow-slate-500/10 hover:transition-all duration-700">
        <div className="">{icon}</div>
        <div className="font-poppins text-[24px] font-bold text-[#333333] mt-[35px]">{title || "No title"}</div>
        <div className="font-poppins text-[16px] font-normal text-[#4F4F4F] mt-[24px]">{desc || "No description"}</div>
        <div className="">
          <button className={` ${selected ? 'bg-[#2D9CDB] text-[#fff]' : 'bg-[#E0E0E0] text-[#828282]'} py-[9px] px-[12px] rounded-[12px] mt-[30px]`}>Get Started</button>
        </div>
      </div>
    )
  }

  return (<>
    <div className="container mx-auto mb-[5000px]">
      <div className="grid md:grid-cols-2 place-items-between">
        <div className="font-extrabold text-[36px] font-heebo">Edie</div>
        <ul className="flex justify-between">
          <li className="flex items-center font-poppins font-medium text-[24px]">Home</li>
          <li className="flex items-center font-poppins font-medium text-[24px]">Services</li>
          <li className="flex items-center font-poppins font-medium text-[24px]">Our Works</li>
          <li className="flex items-center font-poppins font-medium text-[24px]">Clients</li>
          <li className="flex items-center font-poppins font-medium text-[24px]">Contact</li>
        </ul>
      </div>

      <div className="grid lg:grid-cols-8 mt-[20px] lg:mt-[104px]">
        <div></div>
        <div className="col-span-3">
          <div className="text-[#2D9CDB] text-[18px] font-medium font-poppins">
            Unhappy with your website?
          </div>
          <div className="font-poppins text-[48px] font-medium leading-[72px] lg:mt-[16px]">
            We create beautiful and fast web services
          </div>
        </div>
      </div>

      <img src={HeroImage} alt="..." className="w-[100vw] rounded-3xl mt-[42px]" />

      <div className="grid lg:grid-cols-8 mt-[10px] lg:mt-[42px]">
        <div></div>
        <div className="col-span-3">
          <div className="font-poppins text-[48px] font-medium leading-[72px]">
            Story, emotion and purpose
          </div>
          <div className="text-[#000] text-[18px] font-medium font-poppins mt-[42px]">
            We help transform your ideas into real world applications
            that will outperform your toughest competition and help you achieve your strategic goals in short period of time.
          </div>
          <div className="mt-[42px]">
            <div className="font-poppins font-medium text-[14px] text-[#828282] mb-[9px]">Want us to contact you?</div>
            <div className="relative inline-block">
              <input className="bg-[#F2F2F2] p-[15px] text-[#BDBDBD] ps-[21px] pe-[30px] w-[350px] rounded-[12px]" placeholder="Email" />
              <div className="absolute right-0 top-0 rounded-[12px]  text-[#fff] py-[11px] mt-1 me-1 px-[28px] bg-[#2D9CDB]">Join</div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-poppins font-medium text-[36px] mt-[200px]">
        We offer high demand services
      </div>

      <div className="mt-[42px] flex gap-[41px]">
        <ServiceCard
          icon={<span className="material-icons text-[36px] text-[#fff] p-[20px] bg-[#2D9CDB] rounded-[16px]">edit</span>}
          title="UI/UX Design"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
          selected={false}
        />
        <ServiceCard
          icon={<span className="material-icons text-[36px] text-[#fff] p-[20px] bg-[#27AE60] rounded-[16px]">code</span>}
          title="Front End"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
          selected={true}
        />
        <ServiceCard
          icon={<span className="material-icons text-[36px] text-[#fff] p-[20px] bg-[#EB5757] rounded-[16px]">storage</span>}
          title="Back End"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis."
          selected={false}
        />
      </div>

      <div className="">
        Good design means good business
      </div>

      <div className="">
        <div className="">
          <div className="">IMG</div>
          <div className="">Full stack application</div>
          <div className="">Smart home dashboard</div>
        </div>
        <div className="">
          <div className="">IMG</div>
          <div className="">UI/UX Design</div>
          <div className="">Onboard application</div>
        </div>
        <div className="">
          <div className="">IMG</div>
          <div className="">Mobile application</div>
          <div className="">Booking System</div>
        </div>
        <div className="">
          <div className="">IMG</div>
          <div className="">Front End application</div>
          <div className="">Juice product homepage</div>
        </div>
      </div>

      <div>See more ---</div>

      <div className="">
        <div className="">
          <div className="">Meet the team</div>
          <div className="">We are chilled and a laidback team</div>
          <div className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        </div>

        <div className="">
          <div className="">
            <div>
              IMG 1
            </div>
            <div className="">
              <div className="">IMG2</div>
              <div className="">IMG3</div>
            </div>
          </div>
        </div>
      </div>


      <div className="">“Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.” </div>

      <div className="">
        <div className="">DP</div>
        <div className="">
          <div className="">Carlos Tran</div>
          <div className="">The Decorate Gatsby</div>
        </div>
      </div>
      <div className="">
        <div className="">
          <div className="">Home</div>
          <div className="">Services</div>
          <div className="">Our Works</div>
          <div className="">Clients</div>
          <div className="">Contact</div>
        </div>
        <div className="">
          <div className="">Edie</div>
          <div className="">SOCIAL ICONS</div>
        </div>
        <div className="">
          <div className="">Want us to contact you?</div>
          <div className="">INPUT FORM</div>
        </div>
      </div>

    </div>



    <div className="">Footer</div>

    <Footer />
  </>)
}

export default EdieHomepage