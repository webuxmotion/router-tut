import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Post = ({ match }) => {
  
  // useEffect(() => {
  //   fetch(`http://api.example.com/posts/${match.params.id}`)
  // }, [match.params.id])
  return (
    <Link to="/post/40">40</Link>
  )
}