import { useEffect, useRef } from "react"

const App = () => {

  const nameRef = useRef(null)
  const dispNameRef = useRef(null)

  const mailRef = useRef(null)
  const dispMailRef = useRef(null)

  const phoneRef = useRef(null)
  const dispPhoneRef = useRef(null)

  const aboutRef = useRef(null)
  const dispAboutRef = useRef(null)

  const skillRef = useRef(null)
  const dispSkillRef = useRef(null)


  const handleName = ()=> {
    const datas = nameRef.current.value
    dispNameRef.current.innerHTML = datas
  }
  const handleMail = ()=> {
    const datas = mailRef.current.value
    dispMailRef.current.innerHTML = datas
  }
  const handlePhone = ()=> {
    const datas = phoneRef.current.value
    dispPhoneRef.current.innerHTML = datas
  }
  const handleAbout = ()=> {
    const datas = aboutRef.current.value
    dispAboutRef.current.innerHTML = datas
  }
  const handleSkill = ()=> {

    const datas = skillRef.current.value
    console.log(datas)
    dispSkillRef.current.innerHTML = datas
  }
  // const handleClick = ()=> {
  //   myref.current.innerHTML = "this is a ref"

  //   console.log(myref.current.innerHTML)
  //   const data = myref.current.innerHTML
  //   showRef.current.innerHTML = data
  // }
  return (
    <>
    <div className="flex flex-col">
    <div className="flex justify-center items-center bg-fuchsia-950 h-20 w-lvw">
      <h1 className="font-mono text-2xl text-white"> Hooks - useRef</h1>
    </div>
    <div className="grid grid-cols-[1fr_2fr] bg-gray-800 h-150 ">
      <form className="flex flex-col text-white border-2 justify-around items-center">
        <h2>Edit Resume</h2>
        <div className="flex gap-4">
          <label htmlFor="name">Name</label>
          <input className="border-2" type="text" placeholder="Enter your Name" ref={nameRef} onChange={handleName} id="name"/>
        </div>
        <div className="flex gap-4">
          <label htmlFor="mail">Mail</label>
          <input className="border-2" type="text" placeholder="Enter your MailID" ref={mailRef} onChange={handleMail} id="mail"/>
        </div>
        <div className="flex gap-4">
          <label htmlFor="phone">Contact</label>
          <input className="border-2" type="text" placeholder="Enter your phone number" ref={phoneRef} onChange={handlePhone} id="phone"/>
        </div>
        <div className="flex gap-4">
          <label htmlFor="about">About</label>
          <textarea className="border-2" type="text" placeholder="summary about you" ref={aboutRef} onChange={handleAbout} id="about"/>
        </div>
        <div className="flex gap-4">
          <label htmlFor="skill">Skills</label>
          <input className="border-2" type="text" placeholder="Enter skills comma seperated" ref={skillRef} onChange={handleSkill} id="skill"/>
        </div>

      </form>
      <div className=" flex flex-col text-white border-2 p-2  gap-2" >
        <div className="flex flex-col justify-start items-start">
        <h2 ref={dispNameRef}>Your Name</h2>
        <h2 ref={dispMailRef}>Your Mail-Id</h2>
        <h2 ref={dispPhoneRef}>Your Contact</h2>
        </div>
        <div className="flex flex-col p-2">
          <h2>Summary</h2>
          <p className="align-middle" ref={dispAboutRef}>
            
          </p>
        </div>
        <div className="flex flex-col p-2">
          <h2>Skills</h2>
          <p ref={dispSkillRef}>
           
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App