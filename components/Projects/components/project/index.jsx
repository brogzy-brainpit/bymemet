'use client';
import React from 'react'
import styles from './style.module.scss';

export default function index({index, title, manageModal}) {

    return (
        <div onMouseEnter={(e) => {manageModal(true, index, e.clientX, e.clientY)}} onMouseLeave={(e) => {manageModal(false, index, e.clientX, e.clientY)}} className={styles.project}>
            <h2 className='dm-mono-regular text-[20px] md:text-[40px]'>{title}</h2>
            <p className='dm-mono-regular opacity-[0.4] text-[14px] md:text-[20px]' >Design & Development</p>
        </div>
    )
}
