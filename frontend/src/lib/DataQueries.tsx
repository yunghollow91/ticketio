import React from 'react'

export const getEventData = () => {
   const data =  fetch(process.env.HOST || 'http://localhost:3001')

   return data;
}