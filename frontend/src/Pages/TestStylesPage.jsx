import React from 'react'
import Logo from "../Elements/Logo"
import SmallAvatar from "../Elements/SmallAvatar"
import YellowButton from "../Elements/YellowButton"
import Footer from "../Components/Footer"

export default function TestPage() {
  return (
    <>
    <Logo type="vertical"/>
    <Logo type="horisontal"/>
    <SmallAvatar/>
    <YellowButton type="filled" text="Button"/>
    <YellowButton type="outline" text="Button"/>
    <Footer/>
    </>
  )

}