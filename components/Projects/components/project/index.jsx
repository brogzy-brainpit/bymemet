'use client';
import React from 'react'
import styles from './style.module.scss';
import Link from 'next/link';

export default function index({index, title, manageModal}) {

    return (
        <Link href="/works" onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2 className='dm-mono-regula font-custom text-[20px] md:text-[40px]'>{title}</h2>
            <p className='dm-mono-regula font-custom opacity-[0.4] text-[14px] md:text-[20px]' >Design & Development</p>
        </Link> 
    )
}
