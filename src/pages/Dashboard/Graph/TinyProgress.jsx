import { RingProgress } from '@antv/g2plot';
import React, { useState, useEffect } from 'react';



const TinyProgress = ({containername}) => {
    useEffect(() => {
        const ringProgress = new RingProgress(containername, {
            height: 100,
            width: 100,
            autoFit: false,
            percent: 0.2,
            color: ['#5B8FF9', '#E8EDF3'],
        });

        ringProgress.render();
        return () => {
            ringProgress.destroy()
        }
    }, [])



    return (
        <div id={containername}>

        </div>
    )
}

export default TinyProgress