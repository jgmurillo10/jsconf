"use client"

import * as maptilersdk from '@maptiler/sdk';
import { useEffect } from 'react';
import cx from "classnames"

maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;

export default function Map({ className }) {
  useEffect(() => {
    window.map = new maptilersdk.Map({
      container: 'map',
      style: "streets-v2",
      center: [-75.5614369417018, 6.202860991105234],
      zoom: 14,
    })
  }, [])

  return <div id='map' className={cx('w-full h-full rounded-lg', className)}></div>
}