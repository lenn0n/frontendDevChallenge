import React from "react"
import Footer from "@components/Footer/Footer"
import Profile from "@assets/images/profile-photo.jpg"
import Company1 from "@assets/images/company1.png"
import Company2 from "@assets/images/company2.jpg"
import Game1 from "@assets/images/game1.jpg"
import Music1 from "@assets/images/music1.jpg"
import Book1 from "@assets/images/books1.jpg"

const Portfolio = () => {

  const SkillBar = ({ name, barWidth }) => {
    return (
      <div className="grid grid-cols-3 items-center mt-[17px] gap-[12px]">
        <div className="cols-span-3 md:col-span-1 font-mon text-[#4F4F4F] text-[16px] font-medium">
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
        <div className="font-mon text-[#4F4F4F] text-[24px] font-semibold mt-[24px]">
          Silver Wolf
        </div>
        <div className="font-mon text-[#828282] text-[18px] font-medium mt-[7px]">
          Developer / Hacker / Data Scientist
        </div>
        <div className="mt-[32px]">
          <div className="flex items-center gap-4 text-[#4F4F4F]">
            <span className="material-icons ">
              email
            </span>
            <div className="font-mon font-medium text-[18px]">
              silverwolf.bronya@hoyoverse.com
            </div>
          </div>
        </div>
        <div className="mt-[6px]">
          <div className="flex items-center gap-4 text-[#4F4F4F]">
            <span className="material-icons ">
              phone
            </span>
            <div className="font-mon font-medium text-[18px]">
              (+603) 546 624 342
            </div>
          </div>
        </div>

        <div className="mt-[34px] font-mon text-[18px] text-[#828282] font-medium">
          Self-motivated developer, who is willing to learn and create outstanding UI applications.
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
            <div className="font-mon text-[16px] text-[#333333] font-semibold mt-[8px]">
              {jobTitle}
            </div>
            <div className="font-mon text-[16px] text-[#828282] font-medium mt-[24px]">
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
      <div className="font-mon text-[18px] text-[#333333] font-semibold mt-[26px]">
        {name}
      </div>
      <div className="font-mon text-[16px] text-[#828282] font-medium mt-[10px]">
        {desc}
      </div>
    </>
  }

  return (
    <>
      <div className="bg-[#F2F2F2]">
        <div className="container mx-auto p-[12px] md:p-[71px] h-[100%!important]">
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
                    jobTitle="Web Developer"
                    jobDesc="Delivering the best experience for users, creating hooks, constructing utils/helpers, developing pages, applying fixes on bugs"
                  />
                  <Experience
                    companyLogo={Company2}
                    date="December 2010 - June 2015"
                    jobTitle="Self-taught Developer"
                    jobDesc="Basic HTML CSS and Javascript, building personal website and exploring the world."
                  />
                </Card>
                <Card>
                  <div className="font-mon font-medium text-[24px] mb-[44px]">Hobbies</div>

                  <Hobby
                    logo={Book1}
                    name="Reading Latest Trends"
                    desc="To make myself updated on what's hot."
                  />
                  <Hobby
                    logo={Music1}
                    name="Listening to Music"
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
                  <Card className="grow">
                    <div className="font-mon font-bold uppercase text-[#4F4F4F] text-[18px]">Front End</div>
                    <SkillBar
                      name="Vanilla Javascript"
                      barWidth="w-[90%]"
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
                      barWidth="w-[90%]"
                    />
                    <SkillBar
                      name="TailwindCSS"
                      barWidth="w-[98%]"
                    />
                    <SkillBar
                      name="HTML/DOM"
                      barWidth="w-[100%]"
                    />
                  </Card>
                  <Card className="grow">
                    <div className="font-mon font-bold uppercase text-[#4F4F4F] text-[18px]">Design</div>
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
                  Projects (?)
                </Card>
                <Card className="grow">
                  PROJECT 1
                </Card>
                <Card className="grow">
                  PROJECT 2
                </Card>
                <Card className="grow">
                  PROJECT 3
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