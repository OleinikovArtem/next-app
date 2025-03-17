import Link from "next/link"
import Image from "next/image"
import { EyeIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

import { cn, formatDate } from "@/lib/utils"
import { Author, Startup } from "@/sanity/types"

export type StartupCardType = Omit<Startup, "author"> & { author?: Author }

const StartupCard = ({ post }: {  post: StartupCardType }) => {
  const { _createdAt, _id, views, author, description, category, title, image } = post

  return (
    <li className="startup-card group flex flex-col">
      <div className="flex-between">
        <p className="startup-card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-2">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            className="rounded-full"
            src={author?.image || "https://placehold.co/48x48"}
            alt={author?.name || ""}
            width={48} height={48} />
        </Link>
      </div>

      <div className="flex flex-col flex-1 justify-end mt-5">
        <Link href={`/startup/${_id}`}>
          <p className="startup-card_desc">{description}</p>
        </Link>

        <Link href={`/startup/${_id}`}>
          <img src={image || ""} alt="placeholder" className="startup-card_img" />
        </Link>

        <div className="flex justify-between items-center mt-5">
          <Link href={`/?query=${category?.toLowerCase()}`}>
            <p className="text-16-medium">{category}</p>
          </Link>
          <Button className="startup-card_btn" asChild>
            <Link href={`/startup/${_id}`}>Details</Link>
          </Button>
        </div>
      </div>
    </li>
  )
}

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);

export default StartupCard
