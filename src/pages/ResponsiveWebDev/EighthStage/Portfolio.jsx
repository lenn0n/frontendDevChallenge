import React from "react"
import Footer from "@components/Footer/Footer"
import Profile from "@assets/images/profile.png"
import Company1 from "@assets/images/company1.png"
import Company2 from "@assets/images/company2.jpg"
import Game1 from "@assets/images/game1.jpg"
import Music1 from "@assets/images/music1.jpg"
import Book1 from "@assets/images/books1.jpg"

const Portfolio = () => {

  const SkillBar = ({ name, barWidth }) => {
    return (
      <div className="grid grid-cols-3 items-center mt-[17px] gap-[12px]">
        <div className="cols-span-3 md:col-span-1 font-mon text-[#4F4F4F] text-[11px] sm:text-[16px] font-medium">
          {name}
        </div>
        <div className="col-span-2">
          <div className="relative">
            <div className="p-[5px] rounded-[12px] bg-[#C4C4C4] "></div>
            <div className={`mt-[-10px] absolute p-[5px] rounded-[12px] bg-[#2F80ED]  ${barWidth}`}></div>
          </div>
        </div>
      </div>
    )
  }

  const Card = ({ children, className, padding = 'p-[23px]' }) => {
    return (
      <div className={`bg-[#fff] rounded-[12px] shadow-md ${padding} ${className}`}>
        {children}
      </div>
    )
  }

  const PersonalDetails = () => {
    return (
      <>
        <img src={Profile} className="rounded-[12px] hover:shadow-md" />
        <div className="font-mon text-[#4F4F4F] text-[14px] sm:text-[24px] font-semibold mt-[24px]">
          Lennon Benedict D. Jansuy
        </div>
        <div className="font-mon text-[#828282] text-[11px] sm:text-[18px] font-medium mt-[7px]">
          Web Developer
        </div>
        <div className="mt-[32px]">
          <div className="flex items-center gap-4 text-[#4F4F4F]">
            <span className="material-icons ">
              email
            </span>
            <div className="font-mon font-medium text-[11px] sm:text-[18px]">
              lennonbenedictjansuy@gmail.com
            </div>
          </div>
        </div>
        <div className="mt-[6px]">
          <div className="flex items-center gap-4 text-[#4F4F4F]">
            <span className="material-icons ">
              phone
            </span>
            <div className="font-mon font-medium text-[11px] sm:text-[18px]">
              (+63) 916 226 1168
            </div>
          </div>
        </div>

        <div className="mt-[34px] font-mon text-[11px] sm:text-[18px] text-[#828282] font-medium">
          Brighter things awaits if you give your 101% in everything you do. Always strive to become the best. Sky is the limit.
        </div>
      </>
    )
  }

  const Experience = ({ companyLogo, date, jobTitle, jobDesc }) => {
    return (
      <>
        <div className="flex gap-5 mt-[42px]">
          <div className="shrink-0 mt-1"><img src={companyLogo} alt="" height="50px" width="50px" /></div>
          <div className="">
            <div className="font-mon text-[14px] text-[#828282] font-medium">
              {date}
            </div>
            <div className="font-mon text-[11px] sm:text-[16px] text-[#333333] font-semibold mt-[8px]">
              {jobTitle}
            </div>
            <div className="font-mon text-[11px] sm:text-[16px] text-[#828282] font-medium mt-[24px]">
              {jobDesc}
            </div>
          </div>
        </div>
      </>
    )
  }

  const Hobby = ({ logo, name, desc }) => {
    return <>
      <div className="mt-[42px]">
        <img src={logo} alt="" className=" h-[139px] w-[100%] object-cover rounded-lg" />
      </div>
      <div className="font-mon text-[11px] sm:text-[18px] text-[#333333] font-semibold mt-[26px]">
        {name}
      </div>
      <div className="font-mon text-[11px] sm:text-[16px] text-[#828282] font-medium mt-[10px]">
        {desc}
      </div>
    </>
  }

  const Project = ({ tags, title, desc, url, banner }) => {
    return (
      <>
        <div className="flex flex-wrap gap-5">
          <div className="">
            <img src={banner} alt="" />
          </div>
          <div className="font-medium font-mon text-[16px] text-[#4F4F4F]">
            {title}
          </div>
          <div className="text-[#828282] text-[16px] font-medium">
            {desc}
          </div>

          <button className="bg-[#2F80ED] text-[#fff] py-[13px] px-[40px] rounded-[12px]">Demo</button>
          <button className="border-[#2F80ED] text-[#2F80ED] border-[#2F80ED] py-[13px] px-[40px] rounded-[12px]">Code</button>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="bg-[#F2F2F2]">
        <div className="container mx-auto p-[12px] md:p-[30px] h-[100%!important] ">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[32px]">
            <div className="col-span-3 xl:col-span-1">
              <div className="flex flex-wrap flex-col gap-[32px]">
                <Card>
                  <PersonalDetails />
                </Card>
                <Card>
                  <div className="font-mon font-medium text-[24px] mb-[44px]">Experiences</div>
                  <Experience
                    companyLogo={Company1}
                    date="September 14, 2020 - Current"
                    jobTitle="WEB DEVELOPER"
                    jobDesc="Delivering the best customer experience, creating hooks, constructing utils/helpers, developing pages, applying fixes on bugs and so on."
                  />
                  {/* <Experience
                    companyLogo={Company2}
                    date="December 2010 - June 2015"
                    jobTitle="Self-taught Developer"
                    jobDesc="Basic HTML CSS and Javascript, building personal website and exploring the world."
                  /> */}
                </Card>
                <Card>
                  <div className="font-mon font-medium text-[24px] mb-[44px]">Hobbies</div>

                  <Hobby
                    logo={Book1}
                    name="Reading"
                    desc="Become updated on what's hot in the internet."
                  />
                  <Hobby
                    logo={Music1}
                    name="Music"
                    desc="Listening to motivational songs helps me alot."
                  />
                  <Hobby
                    logo={Game1}
                    name="Gaming"
                    desc="To relieve my stress and prevent being burnout."
                  />

                </Card>
              </div>
            </div>
            <div className="col-span-3 xl:col-span-2 mt-[32px] md:mt-[0px]">
              <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col md:flex-row flex-wrap gap-[32px]">
                  <Card className="grow shrink-1">
                    <div className="font-mon font-bold uppercase text-[#4F4F4F] text-[11px] sm:text-[18px]">Front End</div>
                    <SkillBar
                      name="Javascript"
                      barWidth="w-[100%]"
                    />
                    <SkillBar
                      name="React.js"
                      barWidth="w-[90%]"
                    />
                    <SkillBar
                      name="Vue.js"
                      barWidth="w-[95%]"
                    />
                    <SkillBar
                      name="CSS"
                      barWidth="w-[70%]"
                    />
                    <SkillBar
                      name="TailwindCSS"
                      barWidth="w-[78%]"
                    />
                    <SkillBar
                      name="HTML/DOM"
                      barWidth="w-[100%]"
                    />
                  </Card>
                  <Card className="grow">
                    <div className="font-mon font-bold uppercase text-[#4F4F4F] text-[11px] sm:text-[18px]">Design</div>
                    <SkillBar
                      name="Photoshop"
                      barWidth="w-[80%]"
                    />
                    <SkillBar
                      name="AutoCAD"
                      barWidth="w-[60%]"
                    />
                  </Card>
                </div>
                <Card className="grow" padding="p-[22px]">
                  Projects (10)
                </Card>
                <Card className="grow">
                  <Project
                    tags="#HTML #CSS #responsive"
                    title="Recipe Blog"
                    desc="In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. "
                    url="https://fir-crud-8d71b.web.app/recipe"
                  />
                </Card>

                <Card className="grow" padding="p-[22px]">
                  Blogs (?)
                </Card>

                <Card className="grow">
                  BLOG 1
                </Card>
              </div>

            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}


export default Portfolio