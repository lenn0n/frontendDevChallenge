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
      <div role="button" className="group py-[46px] px-[34px] w-[341px] rounded-3xl hover:shadow-lenon hover:shadow-slate-500/10 hover:transition-all duration-700">
        <div className="">{icon}</div>
        <div className="font-poppins text-[24px] font-bold text-[#333333] mt-[35px]">{title || "No title"}</div>
        <div className="font-poppins text-[16px] font-normal text-[#4F4F4F] mt-[24px]">{desc || "No description"}</div>
        <div className="">
          <button className={`group-hover:bg-[#2D9CDB] group-hover:text-[#fff] bg-[#E0E0E0] text-[#828282] py-[9px] px-[12px] rounded-[12px] mt-[30px]`}>Get Started</button>
        </div>
      </div>
    )
  }

  const BusinessCard = ({ img, title, subtitle }) => {
    return (
      <>
        <div role="button" className="mt-[40px] md:odd:mt-[176px] mx-[20px] ">
          <img src={img} className="max-w-full rounded-[24px]" />
          <div className="font-poppins text-[14px] text-[#828282] mt-[31px]">{subtitle}</div>
          <div className="font-poppins text-[24px] text-[#333333] font-medium">{title}</div>
        </div>
      </>
    )
  }

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
  return (<>
    <div id="home" className="container mx-auto flex flex-col items-center" >
      <div className="max-w-full lg:w-[1100px]">
        <div className="flex justify-between items-center m-[20px]">
          <div className="font-extrabold text-[36px] font-heebo">Edie</div>
          <div>
            <span className="material-icons text-[36px] block md:hidden">menu</span>
          </div>
          <ul className="justify-between hidden md:flex gap-7">
            <li role="button" className="flex items-center font-poppins font-medium text-[24px]" onClick={() => { scrollTo('home') }}>Home</li>
            <li role="button" className="flex items-center font-poppins font-medium text-[24px]" onClick={() => { scrollTo('services') }}>Services</li>
            <li role="button" className="flex items-center font-poppins font-medium text-[24px]" onClick={() => { scrollTo('our-works') }}>Our Works</li>
            <li role="button" className="flex items-center font-poppins font-medium text-[24px]" onClick={() => { scrollTo('clients') }}>Clients</li>
            <li role="button" className="flex items-center font-poppins font-medium text-[24px]" onClick={() => { scrollTo('contact') }}>Contact</li>
          </ul>
        </div>

        <div className="grid lg:grid-cols-8 mt-[1rem] lg:mt-[104px] m-[20px] lg:m-[20px]">
          <div></div>
          <div className="col-span-4">
            <div className="text-[#2D9CDB] text-[12px] md:text-[18px] font-medium font-poppins">
              Unhappy with your website?
            </div>
            <div className="font-poppins text-[24px] lg:text-[36px] lg:text-[48px] font-medium lg:mt-[16px]">
              We create beautiful and fast web services
            </div>
          </div>
        </div>

        <div className="px-[20px]">
          <img src={HeroImage} alt="..." className="w-[99%] h-auto rounded-3xl mt-[42px] " />
        </div>

        <div className="grid lg:grid-cols-8 mt-[10px] lg:mt-[42px]">
          <div></div>
          <div className="lg:col-span-3 m-[20px] lg:m-[10px]">
            <div className="font-poppins text-[24px] lg:text-[48px] font-medium ">
              Story, emotion and purpose
            </div>
            <div className="text-[#000] text-[12px] lg:text-[18px] font-normal font-poppins mt-[20px] md:mt-[42px]">
              We help transform your ideas into real world applications
              that will outperform your toughest competition and help you achieve your strategic goals in short period of time.
            </div>
            <div className="mt-[42px]">
              <div className="font-poppins font-medium text-[14px] text-[#828282] mb-[9px]">Want us to contact you?</div>
              <div className="relative inline-block">
                <input className="bg-[#F2F2F2] p-[15px] text-[#BDBDBD] ps-[21px] pe-[30px] w-[90vw] md:w-[350px] rounded-[12px]" placeholder="Email" />
                <div className="absolute right-0 top-0 rounded-[12px]  text-[#fff] py-[11px] mt-1 me-1 px-[28px] bg-[#2D9CDB] hover:shadow-lg hover:shadow-blue-500/50 hover:transition-all duration-700" role="button">Join</div>
              </div>
            </div>
          </div>
        </div>

        <div id="services" className="font-poppins font-medium text-[24px] md:text-[36px] md:mt-[140px] m-[20px]">
          We offer high demand services
        </div>

        <div className="md:mt-[42px] flex gap-[41px] md:gap-4 flex-wrap md:flex-nowrap m-[20px] md:m-[0px] justify-center">
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

        <div id="our-works" className="font-poppins font-medium text-[24px] md:text-[36px] mt-[90px] md:mt-[194px] mx-[20px]">
          Good design means good business
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:mt-[20px]">
          <BusinessCard img={SmartHome} title="Smart home dashboard" subtitle="Full stack application" />
          <BusinessCard img={OnBoard} title="Onboard application" subtitle="UI/UX Design" />
          <BusinessCard img={Booking} title="Booking System" subtitle="Mobile application" />
          <BusinessCard img={JuiceProduct} title="Juice product homepage" subtitle="Front End application" />
        </div>

        <div className="text-[#2D9CDB] font-medium text-[24px] flex mx-[20px] items-center gap-3 md:float-right md:mt-[-40px]">
          <span>see more</span>
          <span className="material-icons">
            trending_flat
          </span>
        </div>

        <div id="clients" className="grid md:grid-cols-2 mt-[50px] md:mt-[40px] mx-[20px] ">
          <div className="flex place-content-center flex-col w-[75%]">
            <div className="font-poppins text-[#EB5757] font-medium text-[18px]">Meet the team</div>
            <div className="font-poppins text-[#333333] font-medium text-[36px]">We are chilled and a laidback team</div>
            <div className="font-poppins text-[#4F4F4F] font-normal text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>

          <div className="grid grid-cols-2 gap-[18px] place-items-center place-content-center mt-[20px] md:mt-[0px]">
            <img src={Person3} width="320" height="320" className="rounded-[24px]" />
            <div className="grid grid-rows-2 gap-2 ">
              <img src={Person1} width="320" height="320" className="rounded-[24px]" />
              <img src={Person2} width="320" height="320" className="rounded-[24px]" />
            </div>
          </div>
        </div>


        <div className="font-poppins font-medium text-[#333333] text-[24px] md:text-[36px] mt-[40px] md:w-[85%] mx-[20px]">
          “Fast and outstanding resutls. Edie understands their customer’s needs. They have a young and talented team.”
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-[36px] mx-[20px]">
          <img src={Person4} width="82" height="82" className="rounded-lg" />
          <div className="">
            <div className="text-[#333333] font-medium text-[24px] font-poppins">Carlos Tran</div>
            <div className="text-[#828282] font-medium text-[18px] font-poppins">The Decorate Gatsby</div>
          </div>
        </div>

      </div>
      <div id="contact" className="bg-[#100E1D] text-[#FFFFFF] mt-[50px] md:mt-[200px] grid lg:grid-cols-3 gap-[40px] md:gap-4 p-[20px] md:p-[46px] w-[100%]
    ">
        <div className="grid md:grid-cols-3">
          <div></div>
          <div className="col-span-3 lg:col-span-1">
            <div role="button" className="font-poppins font-normal text-[18px] mb-4" onClick={() => { scrollTo('home') }}>Home</div>
            <div role="button" className="font-poppins font-normal text-[18px] mb-4" onClick={() => { scrollTo('services') }}>Services</div>
            <div role="button" className="font-poppins font-normal text-[18px] mb-4" onClick={() => { scrollTo('our-works') }}>Our Works</div>
            <div role="button" className="font-poppins font-normal text-[18px] mb-4" onClick={() => { scrollTo('clients') }}>Clients</div>
            <div role="button" className="font-poppins font-normal text-[18px] " onClick={() => { scrollTo('contact') }}>Contact</div>
          </div>
          <div></div>
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
            <input className="bg-[#F2F2F2] p-[15px] text-[#BDBDBD] ps-[21px] pe-[30px] w-[90vw] md:w-[350px] rounded-[12px]" placeholder="Email" />
            <div className="absolute right-0 top-0 rounded-[12px]  text-[#fff] py-[11px] mt-1 me-1 px-[28px] bg-[#2D9CDB] hover:shadow-lg hover:shadow-blue-500/50 hover:transition-all duration-700" role="button">Join</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  </>)
}

export default EdieHomepage