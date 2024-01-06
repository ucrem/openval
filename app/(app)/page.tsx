import Image from 'next/image'
import WelcomeCard from "@/components/ui/dashboard/WelcomeCard";
import IncomingEvents from "@/components/ui/dashboard/incomingEvents";

export default function Home() {
  return (
    <>
      <WelcomeCard/>
      <IncomingEvents/>
    </>
  )
}
