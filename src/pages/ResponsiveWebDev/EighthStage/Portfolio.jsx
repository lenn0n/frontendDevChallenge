import React, { useState } from "react"
import Footer from "@components/Footer/Footer"
import Profile from "@assets/images/profile.png"
import Company1 from "@assets/images/company1.png"
import Company2 from "@assets/images/company2.jpg"
import Game1 from "@assets/images/game1.jpg"
import Music1 from "@assets/images/music1.jpg"
import Book1 from "@assets/images/books1.jpg"

import Recipe from "@assets/images/previews/recipe.png"
import ReactBoilerplate from "@assets/images/previews/react.png"
import Edie from "@assets/images/previews/edie.png"
import Gallery from "@assets/images/previews/gallery.png"
import Interior from "@assets/images/previews/interior.png"
import Team from "@assets/images/previews/team.png"

const Portfolio = () => {

  const [tag, setTag] = useState("")
  const handleSetTag = (tag) => {
    setTag(tag);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const FrontendSkills = [
    {
      name: "Javascript",
      barWidth: "w-[100%]"
    },
    {
      name: "React.js",
      barWidth: "w-[90%]"
    },
    {
      name: "Vue.js",
      barWidth: "w-[95%]"
    },
    {
      name: "CSS",
      barWidth: "w-[70%]"
    },
    {
      name: "TailwindCSS",
      barWidth: "w-[78%]"
    },
    {
      name: "HTML/DOM",
      barWidth: "w-[100%]"
    },

  ]

  const DesignSkills = [
    {
      name: "Photoshop",
      barWidth: "w-[80%]"
    },
    {
      name: "AutoCAD",
      barWidth: "w-[60%]"
    }
  ]

  const Experiences = [
    {
      companyLogo: Company1,
      date: "September 14, 2020 - Current",
      jobTitle: "WEB DEVELOPER",
      jobDesc: "Delivering the best customer experience, creating hooks, constructing utils/helpers, developing pages, applying fixes on bugs and so on."

    }
  ]

  const Hobbies = [
    {
      logo: Book1,
      name: "Reading",
      desc: "Become updated on what's hot in the internet."
    },
    {
      logo: Music1,
      name: "Music",
      desc: "Listening to motivational songs helps me alot."
    },
    {
      logo: Game1,
      name: "Gaming",
      desc: "To relieve my stress and prevent being burnout."
    }
  ]

  const Projects = [
    {
      tags: ["#React", "#Tailwind", "#Responsive", "#Elementary"],
      title: "Edie Homepage",
      desc: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ",
      url: "https://fir-crud-8d71b.web.app/edie-homepage",
      repo: "https://github.com/lenn0n/devchallenges/tree/main/src/pages/ResponsiveWebDev/SeventhStage/EdieHomepage.jsx",
      preview: Edie
    },
    {
      tags: ["#React", "#Tailwind", "#Responsive"],
      title: "Gallery Page",
      desc: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ",
      url: "https://fir-crud-8d71b.web.app/gallery",
      repo: "https://github.com/lenn0n/devchallenges/tree/main/src/pages/ResponsiveWebDev/FifthStage/Gallery.jsx",
      preview: Gallery
    },
    {
      tags: ["#React", "#Tailwind", "#Responsive"],
      title: "Interior Consultant",
      desc: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ",
      url: "https://fir-crud-8d71b.web.app/interior-consultant",
      repo: "https://github.com/lenn0n/devchallenges/tree/main/src/pages/ResponsiveWebDev/ThirdStage/InteriorConsultant.jsx",
      preview: Interior
    },
    {
      tags: ["#React", "#Tailwind", "#Responsive", "#Tutorial"],
      title: "React Boilerplate",
      desc: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ",
      url: "https://fir-crud-8d71b.web.app/react-boilerplate",
      repo: "https://github.com/lenn0n/devchallenges/blob/main/src/pages/HowTo/ReactBoilerplate.jsx",
      preview: ReactBoilerplate
    },
    {
      tags: ["#React", "#Tailwind", "#Responsive"],
      title: "Recipe Blog",
      desc: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ",
      url: "https://fir-crud-8d71b.web.app/recipe",
      repo: "https://github.com/lenn0n/devchallenges/blob/main/src/pages/ResponsiveWebDev/FourthStage/Recipe.jsx",
      preview: Recipe
    },
    {
      tags: ["#React", "#Tailwind", "#Responsive"],
      title: "Team Page",
      desc: "In this project, I work with HTML and CSS to create a responsive page . The design is from devchallenge.io. Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie. ",
      url: "https://fir-crud-8d71b.web.app/team",
      repo: "https://github.com/lenn0n/devchallenges/blob/main/src/pages/ResponsiveWebDev/SecondStage/TeamPage.jsx",
      preview: Team
    },

  ]

  const Blogs = [

  ]

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

  const Project = ({ tags, title, desc, url, preview, repo }) => {
    return (
      <>
        <div className="grid grid-cols-4 gap-[24px] font-mon">
          <div className="col-span-4 md:col-span-1">
            <img src={preview} alt="" className="shadow-lg rounded-[12px]" />
          </div>
          <div className="col-span-4 md:col-span-3">
            <div className="font-medium flex flex-wrap font-mon text-[16px] text-[#4F4F4F]">
              {tags?.length > 0 &&
                tags?.map((tag) => {
                  return (
                    <span className="me-2 hover:text-[#2F80ED] hover:font-bold" role="button" onClick={() => { handleSetTag(tag) }}>{tag}</span>
                  )
                })
              }
            </div>
            <div className="font-medium font-mon text-[24px] text-[#333] mt-[25px]">
              {title}
            </div>
            <div className="text-[#828282] text-[16px] font-medium mt-[18px]">
              {desc}
            </div>
            <div className="flex gap-5 mt-4">
              <a href={url} target="_blank" className="bg-[#2F80ED] text-[#fff] py-[7px] px-[20px] md:py-[13px] md:px-[40px] rounded-[12px]">Demo</a>
              <a href={repo} target="_blank" className="border-[#2F80ED] text-[#2F80ED] border-[2px] py-[7px] px-[20px] md:py-[13px] md:px-[40px] rounded-[12px] hover:bg-[#2F80ED] hover:text-[#fff]">Code</a>
            </div>
          </div>
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
                  {
                    Experiences?.length > 0 &&
                    Experiences.map((data) => {
                      return (
                        <Experience {...data} />
                      )
                    })
                  }
                </Card>
                <Card>
                  <div className="font-mon font-medium text-[24px] mb-[44px]">Hobbies</div>
                  {
                    Hobbies?.length > 0 &&
                    Hobbies.map((data) => {
                      return (
                        <Hobby {...data} />
                      )
                    })
                  }
                </Card>
              </div>
            </div>
            <div className="col-span-3 xl:col-span-2 mt-[32px] md:mt-[0px]">
              <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col md:flex-row flex-wrap gap-[32px]">
                  <Card className="grow shrink-1">
                    <div className="font-mon font-bold uppercase text-[#4F4F4F] text-[11px] sm:text-[18px]">Front End</div>
                    {FrontendSkills?.length > 0 &&
                      FrontendSkills.map((data) => {
                        return (
                          <SkillBar
                            {...data}
                          />
                        )
                      })
                    }
                  </Card>
                  <Card className="grow">
                    <div className="font-mon font-bold uppercase text-[#4F4F4F] text-[11px] sm:text-[18px]">Design</div>
                    {DesignSkills?.length > 0 &&
                      DesignSkills.map((data) => {
                        return (
                          <SkillBar
                            {...data}
                          />
                        )
                      })
                    }
                  </Card>
                </div>
                <Card className="grow" padding="p-[12px]">
                  <div className="flex justify-between flex-wrap text-[#4F4F4F] font-mon">
                    <span className="text-[18px]  font-medium">
                      Projects ({Projects?.length || '0'})
                    </span>
                    {tag &&
                      <span>
                        Showing results with tag of <strong>{tag}</strong>
                        <span role="button" className="font-bold ms-3 text-[#2F80ED]" onClick={() => { setTag("") }}>(Clear)</span>
                      </span>
                    }
                  </div>
                </Card>
                {Projects?.length > 0 && tag == '' &&
                  Projects.map((data) => {
                    return (
                      <Card className="grow">
                        <Project {...data} />
                      </Card>
                    )
                  })
                }

                {Projects?.length > 0 && tag != '' &&
                  Projects.map((data) => {
                    if (data?.tags?.indexOf(tag) != -1) {
                      return (<Card className="grow">
                        <Project {...data} />
                      </Card>)
                    }

                  })
                }

                {/* 
                <Card className="grow" padding="p-[22px]">
                  Blogs (?)
                </Card>

                <Card className="grow">
                  BLOG 1
                </Card> */}
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