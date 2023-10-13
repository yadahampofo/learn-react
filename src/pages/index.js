import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile.js'
//import Gallery from './components/gallery'
import Profile_mistakes from './qcomps/profile_mistake.js';
import Firstcomp from './qcomps/firstcomp.js';
import Bio from './qcomps/bios.js'

export default function Home() {
  return (
    <div className={styles.main}>
        <Bio/>
    </div>
  )
}
