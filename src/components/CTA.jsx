import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow justify-between xs:text-center md:text-left `}>
      <div className='flex flex-col justify-between xs:items-center md:items-start'>
        <h2 className={`${styles.heading2}`}>Let's try our service now!</h2> 
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>

      <div>
        <Button/>
      </div>

    </section>
  )

export default CTA