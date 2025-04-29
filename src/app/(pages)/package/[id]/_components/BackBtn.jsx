'use client'

import styles from '../page.module.css'
import { useRouter } from "next/navigation";



const BackButton = () => {

    const router = useRouter()
    return <h6 onClick={() => router.back()} id={styles.leftBackTitle}>Shopify servies</h6>
  
  }

  export default BackButton