import React from 'react'
import "./Header.css"
import Card from '../Card/Card'
import Title from '../Title/Title'

const Header = () => {
  return (
    <>
    <Title>Общий товар</Title>
    <div className="wrap">

        <Card title="Калл" photo=  "./images.jpeg" price="0.69$"/>
        <Card title="Чай" photo= "./img1.png" price="1.52$"/>
        <Card title="Азербайджанец" photo= "./img2.webp" price="1488$"/>
        <Card />
    </div>
    </>
  )
}

export default Header