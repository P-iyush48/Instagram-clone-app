
import { useState } from 'react';
import Social_Post_Comp from './Posts_comp/Posts_comp';
import Posts_comp from './Posts_comp/Posts_comp';
import styles from './users_posts.module.css';
import Stories from './Users_stories/Stories_comp';

export default function Users_posts_comp() {



    return <section className={styles.users_posts_main_container}>
        <div className={styles.storys_sect}>
            <Stories />
        </div>
        <section className={styles.posts_sect}>
            <ol>
                <Social_Post_Comp />
            </ol>
        </section>
    </section>
}