import React from 'react'

export default function Button(
    {children,
        type='button',
        bgColor='bg-blue-600',
        textColor='text-white',
        className='',...props}) {            //these are the default values if properties specified than overwrite
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}{...props}>    
        {children}</button>          // children is text which we wnt to display on button
  )
}

