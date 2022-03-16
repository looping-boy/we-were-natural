import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { Questions } from './Questions'

export const HomePage = () => {

    return (
        <>
        <video  autoPlay loop muted id="video">
            <source src="../videos/video.mp4" type='video/mp4' />
        </video>
            <p className="blockquote">That's where we met !</p>
            <br />
        </>)
}