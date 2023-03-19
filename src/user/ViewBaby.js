import React from 'react'
import { useParams } from 'react-router-dom'
import Base from '../core/Base'

export default function ViewBaby() {
    const babyId = useParams()
  return (
    <Base>ViewBaby</Base>
  )
}
