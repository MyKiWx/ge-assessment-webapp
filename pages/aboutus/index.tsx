import React, { ReactNode, useState } from 'react'
import Head from 'next/head';
import AboutUsComponent from '../../components/aboutus';

type Props = {}

export const AboutUs = (props: Props) => {

    return (
        <>
            <Head>
                <title>เกี่ยวกับเรา</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/faviconWhite.png" />
            </Head>
            <AboutUsComponent />

        </>
    )
}

export default AboutUs
