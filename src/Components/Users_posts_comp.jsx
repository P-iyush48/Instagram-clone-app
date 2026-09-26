import { useState, lazy, Suspense } from 'react';

import styles from './users_posts.module.css';
import Stories from './Users_stories/Stories_comp';

const Social_Post_Comp = lazy(()=>import('./Posts_comp/Posts_comp'));

export default function Users_posts_comp() {



    return <section className={styles.users_posts_main_container}>
        <div className={styles.storys_sect}>
            <Stories />
        </div>
        <section className={styles.posts_sect}>
            <ol>
                {
                    <Suspense fallback={<h5 style={{textAlign:"center",color:"white",fontFamily:"monospace"}}>post loading...</h5>}>
                        <Social_Post_Comp />
                    </Suspense>
                }
            </ol>
        </section>
    </section>
}