import React from "react"
import Footer from "@components/Footer/Footer"
import HeroImage from "@assets/images/edie/heroImage.jpg"
import SmartHome from "@assets/images/edie/smarthome.jpg"
import OnBoard from "@assets/images/edie/onboard.png"
import Booking from "@assets/images/edie/booking.png"
import JuiceProduct from "@assets/images/edie/juice-product.png"
import Person1 from "@assets/images/edie/person1.png"
import Person2 from "@assets/images/edie/person2.png"
import Person3 from "@assets/images/edie/person3.png"
import Person4 from "@assets/images/edie/person4.png"
import IG from "@assets/images/edie/instagram.svg"
import LI from "@assets/images/edie/linkedin.svg"
import TW from "@assets/images/edie/twitter.svg"

const EdieHomepage = () => {

  const ServiceCard = ({ icon, title, desc, selected = false }) => {
    return (
      <div role="button" className="py-[46px] px-[34px] w-[341px] rounded-3xl hover:shadow-lenon hover:shadow-slate-500/10 hover:transition-all duration-700">
        <div className="">{icon}</div>
        <div className="font-poppins text-[24px] font-bold text-[#333333] mt-[35px]">{title || "No title"}</div>
        <div className="font-poppins text-[16px] font-normal text-[#4F4F4F] mt-[24px]">{desc || "No description"}</div>
        <div className="">
          <button className={` ${selected ? 'bg-[#2D9CDB] text-[#fff]' : 'bg-[#E0E0E0] text-[#828282]'} py-[9px] px-[12px] rounded-[12px] mt-[30px]`}>Get Started</button>
        </div>
      </div>
    )
  }

  const BusinessCard = ({ img, title, subtitle }) => {
    return (
      <>
        <div role="button" className="odd:mt-[176px]">
          <img src={img} className="rounded-[24px]" />
          <div className="font-poppins text-[14px] text-[#828282] mt-[31px]">{subtitle}</div>
          <div className="font-poppins text-[24px] text-[#333333] font-medium">{title}</div>
        </div>
      </>
    )
  }

  return (<>
    <div className="container mx-auto flex flex-col items-center" >
      <div style={{ width: '1100px' }}>
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
          <div className="col-span-4">
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
                <div className="absolute right-0 top-0 rounded-[12px]  text-[#fff] py-[11px] mt-1 me-1 px-[28px] bg-[#2D9CDB]" role="button">Join</div>
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

        <div className="font-poppins font-medium text-[36px] mt-[194px]">
          Good design means good business
        </div>

        <div className="grid grid-cols-2 gap-3 mt-[20px]">
          <BusinessCard img={SmartHome} title="Smart home dashboard" subtitle="Full stack application" />
          <BusinessCard img={OnBoard} title="Onboard application" subtitle="UI/UX Design" />
          <BusinessCard img={Booking} title="Booking System" subtitle="Mobile application" />
          <BusinessCard img={JuiceProduct} title="Juice product homepage" subtitle="Front End application" />
        </div>

        <div className="text-[#2D9CDB] font-medium text-[24px] flex items-center gap-3 float-right mt-[-40px]">
          <span>see more</span>
          <span className="material-icons">
            trending_flat
          </span>
        </div>

        <div className="grid grid-cols-2 mt-[20px] ">
          <div className="flex place-content-center flex-col w-[75%]">
            <div className="font-poppins text-[#EB5757] font-medium text-[18px]">Meet the team</div>
            <div className="font-poppins text-[#333333] font-medium text-[36px]">We are chilled and a laidback team</div>
            <div className="font-poppins text-[#4F4F4F] font-normal text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>

          <div className="grid grid-cols-2 gap-[18px] place-items-center place-content-center">
            <img src={Person3} width="320" height="320" className="rounded-[24px]" />
            <div className="grid grid-rows-2 gap-2 ">
              <img src={Person1} width="320" height="320" className="rounded-[24px]" />
              <img src={Person2} width="320" height="320" className="rounded-[24px]" />
            </div>
          </div>
        </div>


        <div className="font-poppins font-medium text-[#333333] text-[36px] mt-[40px] w-[85%]">
          “Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-[36px]">
          <img src={Person4} width="82" height="82" className="rounded-lg" />
          <div className="">
            <div className="text-[#333333] font-medium text-[24px] font-poppins">Carlos Tran</div>
            <div className="text-[#828282] font-medium text-[18px] font-poppins">The Decorate Gatsby</div>
          </div>
        </div>

      </div>
      <div className="bg-[#100E1D] text-[#FFFFFF] flex w-[100%] mx-0 mt-[200px] grid grid-cols-3 mx-4 p-[46px] 
      container flex  mx-auto ">
        <div className="grid grid-cols-2">
          <div></div>
          <div className="">
            <div className="font-poppins font-normal text-[18px] mb-4">Home</div>
            <div className="font-poppins font-normal text-[18px] mb-4">Services</div>
            <div className="font-poppins font-normal text-[18px] mb-4">Our Works</div>
            <div className="font-poppins font-normal text-[18px] mb-4">Clients</div>
            <div className="font-poppins font-normal text-[18px] ">Contact</div>
          </div>
        </div>
        <div className="">
          <div className="font-extrabold font-heebo text-[36px]">Edie</div>
          <div className="flex flex-row gap-3">
            <img src={IG} />
            <img src={LI} />
            <img src={TW} />
          </div>
        </div>
        <div className="">
          <div className="font-poppins font-medium text-[14px] text-[#828282] mb-[9px]">Want us to contact you?</div>
          <div className="relative inline-block">
            <input className="bg-[#F2F2F2] p-[15px] text-[#BDBDBD] ps-[21px] pe-[30px] w-[350px] rounded-[12px]" placeholder="Email" />
            <div className="absolute right-0 top-0 rounded-[12px]  text-[#fff] py-[11px] mt-1 me-1 px-[28px] bg-[#2D9CDB]" role="button">Join</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  </>)
}

export default EdieHomepage