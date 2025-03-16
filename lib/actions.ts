"use server"

import { auth } from "@/auth"
import { parsServerActionResponse } from "@/lib/utils"
import slugify from "slugify"
import { writeClient } from '@/sanity/lib/write-client'

export const createPitch = async (state: any, form: FormData, pitch: string) => {
  const session = await auth()

  if (!session) {
    return parsServerActionResponse({
      status: "ERROR",
      error: "You must be logged in to create a pitch",
    })
  }

  const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "pitch")
  )

  const slug = slugify(title as string, { lower: true, strict: true })

  try {
     const startup = {
       title, description, category, image: link,
       slug: { _type: slug, current: slug },
       author: { _type: "reference", _ref: session?.id },
       pitch,
     }


     const result = await writeClient.create({
       _type: "startup",
       ...startup
     })

    return parsServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    })
  } catch (error) {
    console.error(error)

    return parsServerActionResponse({
      status: "ERROR",
      error: JSON.stringify(error),
    })
  }

}
