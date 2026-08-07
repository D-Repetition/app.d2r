"use client";

import KidDetails from '@/components/ui/organisms/dashboard/parent/KidDetails';
import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams<{ id: string }>()
    const searchParams = useSearchParams();

  return (
    <>
          <KidDetails kidid={params.id} />
    </>
  )
}

export default page
