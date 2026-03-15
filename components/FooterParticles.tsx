"use client"

import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"

export default function FooterParticles() {

  const particlesInit = async (engine:any) => {
    await loadSlim(engine)
  }

  return (

    <Particles
      id="footerParticles"
      init={particlesInit}
      options={{
        background:{color:"transparent"},
        fpsLimit:60,
        particles:{
          number:{value:30},
          color:{value:"#38bdf8"},
          links:{
            enable:true,
            distance:120,
            color:"#38bdf8",
            opacity:0.3,
            width:1
          },
          move:{
            enable:true,
            speed:0.5
          },
          opacity:{value:0.4},
          size:{value:2}
        }
      }}
      className="absolute inset-0 -z-10"
    />

  )
}