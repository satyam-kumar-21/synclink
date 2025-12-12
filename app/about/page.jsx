import IntroSection from "./IntroSection"
import OurHistory from "./OurHistory"
import OurStrategy from "./OurStrategy"
import WhoWeAre from "./WhoWeAre"
import JoinUs from "../home/JoinUs"

function page() {
  return (
    <>
      <IntroSection/>
      <WhoWeAre/>
      <OurStrategy />
      {/* <OurHistory/> */}
      <JoinUs />
    </>
  )
}

export default page
